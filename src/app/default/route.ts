/* 

export async function HEAD(request: Request) {}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and set the appropriate Response `Allow` header depending on the other methods defined in the Route Handler.
export async function OPTIONS(request: Request) {}

*/

import withDb from '@lib/withDb';

export const GET = withDb(async () => {
  try {
    return Response.json(
      { success: true, data: [{}] },
      { status: 200, statusText: 'OK' },
    );
  } catch (error) {
    console.warn('🚀 ~ GET ~ error:', error);
    return Response.json(
      { success: false },
      { status: 400, statusText: 'Bad Request' },
    );
  }
});

export const POST = withDb(async (request: Request) => {
  try {
    const requestBody = await request.json();
    return Response.json(
      { success: true, data: { ...requestBody } },
      { status: 201, statusText: 'Item Created Successfully!' },
    );
  } catch (error) {
    console.log('🚀 ~ POST ~ error:', error);
    return Response.json(
      { success: false, error },
      { status: 400, statusText: 'Bad Request' },
    );
  }
});
