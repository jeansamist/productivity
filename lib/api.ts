/* eslint-disable no-unsafe-optional-chaining */
import { Response } from "@/types/Response";
import { isAxiosError } from "axios";
import { axiosInstance } from "./axiosInstance";
// Define common types for success and error handlers
type ApiSuccessHandler<RESPONSE, RETURN = RESPONSE> = (
  data: RESPONSE
) => RETURN;
type ApiErrorHandler = (error: Error) => Error;

// Define a generic type for the API function
type ApiFunction = <PAYLOAD = undefined, RESPONSE = unknown, RETURN = RESPONSE>(
  method: "GET" | "POST" | "PUT" | "DELETE",
  url: string,
  payload?: PAYLOAD,
  onSuccess?: ApiSuccessHandler<RESPONSE, RETURN>,
  onError?: ApiErrorHandler
) => Promise<RETURN | Error>;

// Centralized API request handler
const apiRequest: ApiFunction = async <PAYLOAD, RESPONSE, RETURN = RESPONSE>(
  method: string,
  url: string,
  payload: PAYLOAD,
  onSuccess: ApiSuccessHandler<RESPONSE, RETURN> | undefined,
  onError: ApiErrorHandler | undefined
): Promise<RETURN | Error> => {
  const unknownError = onError
    ? onError(new Error("Unknown error"))
    : new Error("Unknown error");

  try {
    const _url = "/api/v1" + (url.startsWith("/") ? url : "/" + url);
    // Determine the correct axios method and call it
    const axiosMethod = () => {
      switch (method) {
        case "POST":
          return axiosInstance.post<Response<RESPONSE>>(_url, payload);
        case "PUT":
          return axiosInstance.put<Response<RESPONSE>>(_url, payload);
        case "DELETE":
          return axiosInstance.delete<Response<RESPONSE>>(_url);
        case "GET":
        default:
          return axiosInstance.get<Response<RESPONSE>>(_url);
      }
    };

    const { data: response } = await axiosMethod();

    if (response.data) {
      return onSuccess ? onSuccess(response.data) : (response.data as RETURN);
    } else {
      return unknownError;
    }
  } catch (error) {
    if (isAxiosError(error)) {
      if ("message" in error.response?.data) {
        return onError
          ? onError(new Error(error.response?.data.message))
          : new Error(error.response?.data.message);
      }
    }
    console.log(error);

    return unknownError;
  }
};

// Specific functions for each HTTP method
export const GET = <RESPONSE, RETURN = RESPONSE>(
  url: string,
  onSuccess?: ApiSuccessHandler<RESPONSE, RETURN>,
  onError?: ApiErrorHandler
) =>
  apiRequest<undefined, RESPONSE, RETURN>(
    "GET",
    url,
    undefined,
    onSuccess,
    onError
  );

export const POST = <PAYLOAD, RESPONSE, RETURN = RESPONSE>(
  url: string,
  payload: PAYLOAD,
  onSuccess?: ApiSuccessHandler<RESPONSE, RETURN>,
  onError?: ApiErrorHandler
) =>
  apiRequest<PAYLOAD, RESPONSE, RETURN>(
    "POST",
    url,
    payload,
    onSuccess,
    onError
  );

export const PUT = <PAYLOAD, RESPONSE, RETURN = RESPONSE>(
  url: string,
  payload: PAYLOAD,
  onSuccess?: ApiSuccessHandler<RESPONSE, RETURN>,
  onError?: ApiErrorHandler
) =>
  apiRequest<PAYLOAD, RESPONSE, RETURN>(
    "PUT",
    url,
    payload,
    onSuccess,
    onError
  );

export const DELETE = <RESPONSE, RETURN = RESPONSE>(
  url: string,
  onSuccess?: ApiSuccessHandler<RESPONSE, RETURN>,
  onError?: ApiErrorHandler
) =>
  apiRequest<undefined, RESPONSE, RETURN>(
    "DELETE",
    url,
    undefined,
    onSuccess,
    onError
  );
