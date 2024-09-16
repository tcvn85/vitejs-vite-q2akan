import { useEffect, useState } from "react";
import PhotoCard from "../../components/photo-card";
import InfiniteScroll from "react-infinite-scroll-component";
import { PhotoType } from "../../types/photo.type";
import Loading from "../../components/loading";
import "./home.scss";

const pageTitle = "Photo Cards";
const url = "/data.json";

const Home = () => {

  const [photos, setPhotos] = useState<PhotoType[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    document.title = pageTitle;
    const controller = new AbortController();
    fetch(url, { signal: controller.signal })
      .then(res => res.json())
      .then(data => {
        setPhotos(data)
      })
      .catch(err => console.log(err));

    return () => {
      controller.abort();
    }
  }, [url]);


  const fetchMoreData = async () => {
    try {
      const data = await fetch(url);
      const jsonData = await data.json();
      if (photos.length >= 48) {
        setHasMore(false);
      }

      setTimeout(() => {
        setPhotos(prevState => [...prevState, ...jsonData]);
      }, 1000)

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="home-body">
      <h1 className="title">{pageTitle}</h1>

      <InfiniteScroll
        dataLength={photos.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<div style={{ textAlign: 'center' }}><Loading /></div>}
        pullDownToRefreshThreshold={40}
      >
        <div className="grid">
          {photos &&
            photos.map((item, index) =>
              <div key={index}>
                <PhotoCard photo={item} />
              </div>
            )}
        </div>
      </InfiniteScroll >
    </div >
  )
}

export default Home;