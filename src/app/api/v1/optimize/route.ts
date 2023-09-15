import {
  IOptimizeQueryParams,
  OptimizeQueryParams,
} from "@/utils/interfaces/OptimizeQueryParams";
import { findHeaderFileName } from "@/utils/interfaces/functions/header";
import { NextResponse, NextRequest } from "next/server";
import sharp from "sharp";

export async function POST(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const { type, width, height, quality, fit } = getOptimizeQuery(searchParams);
  const body = await req.arrayBuffer();
  const newType = type ?? req.headers.get(`content-type`)?.split(`/`)[1]
  try {
    const optImage = await sharp(body)
      .resize(width, height, { fit: fit as keyof sharp.FitEnum })
      .toFormat(newType as keyof sharp.FormatEnum, {
        quality: quality ?? undefined,
      })
      .toBuffer();
    const response = new Response(optImage, {
      headers: {
        "Content-Type": `image/${newType}`,
        "Content-Disposition": `attachment; filename="${findHeaderFileName(req.headers)}.${newType}"`,
      },
    });
    return response;
  } catch (err) {
    console.error(err);
  }
  return NextResponse.json({ sucess: false }, { status: 400 });
}

function getOptimizeQuery(searchParams: URLSearchParams) {
  const type = searchParams.get(OptimizeQueryParams.TYPE) ?? undefined;
  const fit = searchParams.get(OptimizeQueryParams.FIT) ?? "contain";
  let entryWidth = searchParams.get(OptimizeQueryParams.WIDTH);
  let entryHeight = searchParams.get(OptimizeQueryParams.HEIGHT);
  let entryQuality = searchParams.get(OptimizeQueryParams.QUALITY);

  const width = queryToInt(entryWidth);
  const height = queryToInt(entryHeight);
  const quality = queryToInt(entryQuality);

  const response: IOptimizeQueryParams = { type, width, height, quality, fit };
  return response;
}

function queryToInt(potentialNumber: string | null) {
  if (!potentialNumber) {
    return undefined;
  }
  if (potentialNumber.length === 0) {
    throw new Error("String has no value, expected length greater than 0");
  }
  return Number.parseInt(potentialNumber);
}
