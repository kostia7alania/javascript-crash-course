function findLongestWord(str) {
    const words = str.split(" ");
    let longest = ""; 
    
    words.forEach (word => word.length > longest.length && (longest = word))
      
    
    return `
        Word: ${longest}
        Length: ${longest.length}`
    }
    
    findLongestWord ("Решение о том, какой вариант .");