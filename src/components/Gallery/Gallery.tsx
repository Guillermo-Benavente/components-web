import { useState } from "react";
import { FiX } from "react-icons/fi";
import style from "./gallery.module.css";

type GalleryProps = {
    images: {
        url: string;
        alt: string;
        description: string;
    }[];
    imageSize: string;
};

declare module "react" {
    interface HTMLAttributes<T> {
        command?: string;
        commandfor?: string;
        closedby?: string;
    }
}

export default function Gallery({ 
    images,
    imageSize,
}: GalleryProps) {
    const [selectedImage, setSelectedImage] = useState<{
        url: string;
        alt: string;
    } | null>(null);

    const chargeImage = (image: { url: string; alt: string }) => {
        setSelectedImage(image);
    };

    const varCss = {
    '--gallery-width-img': imageSize
  } as React.CSSProperties;

    return (
        <>
            <div className={style.gallery} style={varCss}>
                {images.map((img, index) => (
                    <button
                        key={index}
                        className={style.imageWrapper}
                        commandfor="showImage"
                        command="show-modal"
                        closedby="any"
                        onClick={() => chargeImage(img)}
                    >
                        <img
                            src={img.url}
                            alt={img.alt}
                            className={style.image}
                        />
                        <p className={style.description}>{img.description}</p>
                    </button>
                ))}
            </div>

            <dialog
                id="showImage"
                className={style.dialog}
                inert={!selectedImage}
            >
                {selectedImage && (
                    <>
                        <button
                            className={style.closeButton}
                            commandfor="showImage"
                            command="close"
                            aria-label="Cerrar"
                        >
                            <FiX size={20} />
                        </button>
                        <img
                            src={selectedImage.url}
                            alt={selectedImage.alt}
                            className={style.fullImage}
                        />
                    </>
                )}
            </dialog>
        </>
    );
}