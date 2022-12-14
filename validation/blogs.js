const validateBlogData = (blogData) => {
    //console.log(blogData)
    //console.log(typeof(blogData.email))



    if(blogData.title === undefined || typeof(blogData.title) !== "string"){
        return { 
            isValid: false,
            message: "Title is required and it must be a string"
        }
    }

    if(blogData.title.length > 40){
        return {
            isValid: false,
            message: "Title must be less than 40 characters"
        }
    }
    
    if(blogData.text === undefined || typeof(blogData.text) !== "string"){
        return {
            isValid: false,
            message: "Text is required and it must be a string"
        }
    }
    
    
    if(blogData.author === undefined || typeof(blogData.author) !== "string"){
        return {
            isValid: false,
            message: "Author is required and it must be a string"
        }
    }
    
    if (blogData.author.length > 40) {
      return {
        isValid: false,
        massage: "Author must be less than 40 characters",
      };
    }

    return {
        isValid: true
    }

}

module.exports = {
    validateBlogData
}