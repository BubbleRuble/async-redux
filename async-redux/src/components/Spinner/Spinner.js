import { ClipLoader } from "react-spinners";

export const ClipLoader = () => {
  return (
    <>
    <ClipLoader
        color='#000000'
        loading='true'
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  )
}