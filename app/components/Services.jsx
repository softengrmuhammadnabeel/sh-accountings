import { assets } from '@/assets/assets';
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button, Box } from '@mui/material';
import { useRouter } from 'next/navigation'
import { CircularProgress } from "@mui/material";

const Services = () => {
  const router = useRouter();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchservices = async () => {
    const response = await fetch("/api/services");
    if (!response.ok) {
      throw new Error("Failed to fetch services");
    }
    return response.json();
  };

  const checkCacheAndFetch = async () => {
    const cachedData = localStorage.getItem("services");
    const lastFetched = localStorage.getItem("lastFetchedservices");

    if (cachedData && lastFetched) {
      const now = new Date().getTime();
      const timeDifference = now - parseInt(lastFetched, 10);

      if (timeDifference < 0.5 * 60 * 1000) {
        setServices(JSON.parse(cachedData));
        setLoading(false);
        return;
      }
    }

    try {
      const data = await fetchservices();
      setServices(data);
      localStorage.setItem("services", JSON.stringify(data));
      localStorage.setItem("lastFetchedservices", new Date().getTime().toString());
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkCacheAndFetch();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="services" className="w-full px-[5%] py-10 scroll-mt-20">
      {/* <h4 className="text-center mb-2 text-lg font-Ovo">What we Offer</h4> */}
      <h2 className="text-center text-5xl font-Ovo">Our Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        We are here to maintain the financial information required by your
        investors, regulators, and management through our:
      </p>
      <div className="my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: '100%', height: "50vh" }}>
              <CircularProgress />
            </Box>
          ) : services.slice(0, 4).map((service) => (
            <div
              key={service._id}
              className="max-w-sm mx-auto overflow-hidden bg-white dark:bg-[#1c0831] rounded-lg shadow-md"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
                  {service.title}
                </h2>
                <p className="mb-6 text-gray-600 dark:text-white">
                  {service?.description?.split("\n")[0]}
                </p>
                <Button
                  variant="outlined"
                  onClick={() => router.push(`/services/${service._id}`)}
                  sx={{
                    color: "#3C4E80",
                    borderColor: "#3C4E80",
                    fontWeight: "600",
                    borderRadius: "50px",
                    alignSelf: "flex-start",
                    px: 3,
                    fontSize: "0.8rem",
                    "&:hover": {
                      backgroundColor: "rgba(60, 78, 128, 0.1)",
                      borderColor: "#3C4E80",
                    },
                  }}
                >
                  Explore More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 4,
        }}
      >
        <Button
          variant="contained"
          size="large"
          onClick={() => router.push('/services')}
          sx={{
            backgroundColor: "#7F8DAB",
            fontSize: "1rem",
            fontWeight: 600,
            px: 4,
            py: 1.5,
            border: '2px solid white',
            borderRadius: "50px",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#3C4E80"
            }
          }}
        >
          Explore More Services
        </Button>
      </Box>
    </div>
  );
};

export default Services;

