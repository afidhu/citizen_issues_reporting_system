class ApiUrls {
  // Base URL
  // static const String baseUrl = 'http://10.17.141.1:5000';
  static const String baseUrl = 'http://172.16.85.249:5000';


  // Endpoints
  static const String auth = '$baseUrl/auth/login';
  static const String register = '$baseUrl/auth/register';
  static const String Issues ='$baseUrl/issues';
  static const String announcements ='$baseUrl/announcement';
  static const String announcement_category_filter ='$baseUrl/announcement-category';


}