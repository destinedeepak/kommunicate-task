function getMS(date) {
  return new Date(date).getTime();
} // function to returns the number of milliseconds since the Unix Epoch

function ifLiesBeween(x, y) {
  if (
    (x.a >= y.a && x.a <= y.b) ||
    (x.b >= y.a && x.b <= y.b) ||
    (y.a >= x.a && y.a <= x.b) ||
    (y.b >= x.a && y.b <= x.b)
  ) {
    return true;
  } else return false;
} // function to check if two pair of number lies between each other

function getMaxAmount(movieArr) {
  let sortedMovie = [...movieArr].sort((a, b) => {
    return (
      getMS(a.endDate) -
      getMS(a.startDate) -
      (getMS(b.endDate) - getMS(b.startDate))
    );
  }); // Sorted arr of  movie by duration

  let movieList = sortedMovie.reduce((acc, movie) => {
    let isTrue = acc.some((sortedMovie, index) => {
      if (
        ifLiesBeween(
          { a: movie.startDate, b: movie.endDate },
          { a: sortedMovie.startDate, b: sortedMovie.endDate }
        )
      ) {
        return true;
      } else {
        return false;
      }
    });
    if (!isTrue) {
      acc.push(movie);
    }
    return acc;
  }, []);
  return {
    maxAmount: movieList.length + " Crore",
    movieList: movieList.map((movie) => movie.name),
  };
}

console.log(
  getMaxAmount([
    { name: 'Bala', startDate: 'jan-08-2021', endDate: 'jan-28-2021' },
    { name: 'Rock', startDate: 'jan-20-2021', endDate: 'jan-30-2021' },
    { name: 'PolicyMaker', startDate: 'jan-29-2021', endDate: 'feb-16-2021' },
    { name: 'Brave', startDate: 'feb-02-2021', endDate: 'feb-14-2021' },
    { name: 'Drive', startDate: 'feb-10-2021', endDate: 'feb-18-2021' },
    { name: 'Race', startDate: 'feb-15-2021', endDate: 'feb-28-2021' },
  ])
);
