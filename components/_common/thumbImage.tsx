import Image from "next/image";

  
  export function ThumbImage(props: any) {
    return (
        <Image src={props.thumbnail} width={100} height={100} alt="Image" />
    )
  }