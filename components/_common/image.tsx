import Image from "next/image";

  
  export function NextImage(props: any) {
    return (
        <Image src={props.original} width={1000} height={1000} alt="Image" />
    )
  }