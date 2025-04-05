import connectDB from '@/lib/mongodb';
import Service from '@/models/Service';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
    try {
        await connectDB();
        const service = await Service.findById(params.id);

        if (!service) {
            return NextResponse.json({ error: 'service not found' }, { status: 404 });
        }

        return NextResponse.json(service);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        await connectDB();
        const service = await Service.findByIdAndDelete(params.id);

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
        const data = await request.json();
        const service = await Service.findByIdAndUpdate(params.id, data, { new: true });

        if (!blog) {
            return NextResponse.json({ error: 'service not found' }, { status: 404 });
        }

        return NextResponse.json(service);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}