const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const getTrendingMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const result = await fetch(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return result.results;
};

export const getPopularMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const result = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return result.results;
};

export const getTrendingShows = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const result = await fetch(
    "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return result.results;
};

export const getPopularShows = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const result = await fetch(
    "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return result.results;
};

export const getTopRatedShows = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const result = await fetch(
    "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return result.results;
};

export const getMediaById = async (mediaId: number, mediaType: string) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const result = await fetch(
    `https://api.themoviedb.org/3/${mediaType}/${mediaId}`,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return result;
};

export const getTrailerById = async (mediaId: number, mediaType: string) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };
  

  const result = await fetch(
    `https://api.themoviedb.org/3/${mediaType}/${mediaId}/videos`,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return result.results.find((item: any) => item.type === "Trailer");
};

export const getGenreShows = async (genreId: number) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const result = await fetch(
    `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return result.results;
};

export const getGenreMovies = async (genreId: number) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const result = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return result.results;
};

export const getMedia = async (mediaId: number) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  let result, type;

  try {
    result = await fetch(
      `https://api.themoviedb.org/3/tv/${mediaId}?language=en-US`,
      options
    )
    .then((response) => response.json())

    if(result.success == false) {
      throw new Error()
    }

    return [result, type="tv"]
  } catch  {
    result = await fetch(
      `https://api.themoviedb.org/3/movie/${mediaId}?language=en-US`,
      options
    )
    .then((response) => response.json())

    return [result, type="movie"]
  }
};
