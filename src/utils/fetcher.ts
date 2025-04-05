export async function fetcher<T>(url: string, options?: RequestInit): Promise<T> {
  try {
    const response = await fetch(url, options)

    if (!response.ok) {
      throw new Error("서버에서 문제가 발생했습니다. 잠시 후 다시 시도해주세요.")
    }

    const responseData = await response.json()
    return responseData
  } catch (error) {
    throw new Error((error as Error).message || "서버에서 문제가 발생했습니다. 잠시 후 다시 시도해주세요.")
  }
}
