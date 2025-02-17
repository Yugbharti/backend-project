// This class is useful for API error handling because:
// It allows returning structured error responses.
// It makes debugging easier with statusCode, message, and errors.
// It ensures consistency in error handling across the application.

class ApiError extends Error {
    constructor(
        statusCode,
        message = "something went wrong",
        errors = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors
    }
}