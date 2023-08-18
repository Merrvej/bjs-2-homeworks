//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = md5(args.join());
    let objectInCache = cache.find((item) => item.hash === hash);
    if(objectInCache) {
        console.log("Из кеша: " + objectInCache.result);
        return "Из кеша: " + objectInCache.result;
    }
    let result = func(...args);
    cache.push({hash, result});
    if(cache.length > 5) {
        cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    function wrapper(...args) {
        let count = 0;
        let allCount = 0;
        let timeoutId = null;
        
        if (timeoutId === null) {
            count++;
            allCount++;
            timeoutId = console.log(func(...args));
            return timeoutId;
        }

        if (timeoutId !== null) {
            count++;
            allCount++;
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            timeoutId = null;
            count++;
            allCount++;
            console.log(func(...args));
        }, delay);
        
    }
    return wrapper;
}
