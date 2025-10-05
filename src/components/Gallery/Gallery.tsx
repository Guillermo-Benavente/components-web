import { useState, useEffect } from "react";
import style from "./gallery.module.css";

type ImageSet = {
    avif: string;
    webp: string;
    jpg: string;
};

type ImageType = {
    url: ImageSet;
    alt: string;
    name: string;
    size: string;
    technique: string;
    description: string;
};

type GalleryProps = {
    images: ImageType[];
    defaultColumns?: number;
};

declare module "react" {
    interface HTMLAttributes<T> {
        closedby?: string;
    }
}


export default function MasonryGallery({ images, defaultColumns = 4 }: GalleryProps) {
    const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
    const [columns, setColumns] = useState(defaultColumns);

    useEffect(() => {
        const updateColumns = () => {
            const width = window.innerWidth;
            if (width < 480) setColumns(1);
            else if (width < 768) setColumns(2);
            else if (width < 1024) setColumns(3);
            else setColumns(defaultColumns);
        };
        updateColumns();
        window.addEventListener("resize", updateColumns);
        return () => window.removeEventListener("resize", updateColumns);
    }, [defaultColumns]);

    return (
        <>
            <div
                className={style.masonryGallery}
                style={{ columnCount: columns, columnGap: "16px" }}
            >
                {images.map((img, idx) => (
                    <button
                        key={idx}
                        className={style.imageWrapper}
                        onClick={() => setSelectedImage(img)}
                    >
                        <picture className={style.image}>
                            <source srcSet={img.url.avif} type="image/avif" />
                            <source srcSet={img.url.webp} type="image/webp" />
                            <img src={img.url.jpg} alt={img.alt} loading="lazy"/>
                        </picture>
                        <div className={style.description}>
                            <h3>{img.name}{img.technique ? ` - ${img.technique}` : ''}</h3>
                            <p>{img.description}</p>
                            <small className={style.size}>{img.size}</small>
                        </div>
                    </button>
                ))}
            </div>

            <dialog
                className={style.dialog}
                inert={!selectedImage}
                open={!!selectedImage}
                onClick={() => setSelectedImage(null)}
            >
                {selectedImage && (
                    <picture className={`${style.fullImageWrapper} ${style.fullImage}`}>
                        <source srcSet={selectedImage.url.avif} type="image/avif" />
                        <source srcSet={selectedImage.url.webp} type="image/webp" />
                        <img src={selectedImage.url.jpg} alt={selectedImage.alt} />
                    </picture>
                )}
            </dialog>
        </>
    );
}
