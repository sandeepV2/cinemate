import {Routes, Route} from "react-router-dom";
import { MovieDetail, MovieList, PageNotFound, Search } from "../pages";



export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="movies/:id" element={<MovieDetail />} />
        <Route path="movies/popular" element={<MovieList />} />
        <Route path="movies/top" element={<MovieList />} />
        <Route path="movies/upcoming" element={<MovieList />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}
