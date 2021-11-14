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
}  // function to check if two pair of number lies between each other

function getMaxAmount(movieArr) {
  let sortedMovie = [...movieArr].sort((a, b) => {
    return (
      getMS(a.endDate) -
      getMS(a.startDate) -
      (getMS(b.endDate) - getMS(b.startDate))
    );
  });    // Sorted arr of  movie by duration
  return (
    sortedMovie.reduce((acc, movie) => {
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
    }, []).length +
    1 +
    ' Crore'
  );
}

console.log(
  getMaxAmount([
    { name: 'movie4', startDate: '12-01-2021', endDate: '12-13-2021' },
    { name: 'movie1', startDate: '03-12-2021', endDate: '06-06-2021' },
    { name: 'movie2', startDate: '01-01-2021', endDate: '02-02-2021' },
    { name: 'movie3', startDate: '04-19-2021', endDate: '06-06-2021' },
    { name: 'movie4', startDate: '12-12-2021', endDate: '12-30-2021' },
    { name: 'movie5', startDate: '06-06-2021', endDate: '07-06-2021' },
    { name: 'movie6', startDate: '07-12-2021', endDate: '12-06-2021' },
    { name: 'movie7', startDate: '08-12-2021', endDate: '09-06-2021' },
  ])
);
