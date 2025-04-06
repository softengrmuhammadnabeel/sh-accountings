import connectDB from '@/lib/mongodb';
import Service from '@/models/Service';
import { NextResponse } from 'next/server';
export async function GET(request, { params }) {
    try {
        await connectDB();
        const { id } = await params;
        const service = await Service.findById(id);

        if (!service) {
            return NextResponse.json({ error: 'Service not found' }, { status: 404 });
        }

        return NextResponse.json(service);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        await connectDB();
        const { id } = await params;
        const service = await Service.findByIdAndDelete(id);

        if (!service) {
            return NextResponse.json({ error: 'service not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'service deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(request, { params }) {
    try {
        await connectDB();
        const { id } = await params;
        const data = await request.json();
        const service = await Service.findByIdAndUpdate(id, data, { new: true });

        if (!blog) {
            return NextResponse.json({ error: 'service not found' }, { status: 404 });
        }

        return NextResponse.json(service);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}