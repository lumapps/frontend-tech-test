const calculatePageNumber = (totalResults) => {
    return Math.ceil(totalResults / 4)
}

 export default calculatePageNumber