import placeholder from "../../assets/placeholder.svg";
import { PhotoType } from "../../types/photo.type";

import "./photo-card.scss";

type PhotoCardProps = {
  photo: PhotoType
}

const PhotoCard = ({ photo }: PhotoCardProps) => {
  return (
    <div className="card-item">
      <img src={photo?.img || placeholder} alt={photo.title} />
      <h2>{photo.title}</h2>
    </div>
  )
}

export default PhotoCard;