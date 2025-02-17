// This class is commonly used in APIs to standardize response formats.
//  It helps ensure that every API response has a consistent structure.
// Ensures all responses follow a structured format.
// Reduces the need to manually structure responses in every route.
// Improves API consistency.

class ApiResponse{
    constructor(statusCode,data,message="success",){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}

export {ApiResponse}