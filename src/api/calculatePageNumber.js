const calculatePageNumber = (totalResults, resultsParPage) => {
    return Math.ceil(totalResults / resultsParPage)
}

 export default calculatePageNumber