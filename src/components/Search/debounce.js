const debounce = (cb, delay = 250) => {
  /* 
    This function adds a delay on a specified action/callback.
      Args:
          cb (function): callback to delay
          delay (int): delay to apply - defaults to 250ms
      Returns:
          Delayed function in a timeout
   */
    let timeout

    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            cb(...args)
        }, delay)
    }
}

export default debounce