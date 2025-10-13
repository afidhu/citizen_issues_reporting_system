import 'dart:convert';

import 'package:flutte_citizen/ApiProvider/Apiprovider.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:http/http.dart' as http;

import '../model/filterannouncementByCategory.dart';

class CategoriesController extends GetxController{

  @override
  void onInit() {
    // TODO: implement onInit
    super.onInit();
    getCategoriesAnnouncements(1);
  }

  var categoriesAnnouncements =<CategoriesAnnouncements>[].obs;
  var isLoading = true.obs;

  Future<void> getCategoriesAnnouncements(int? categoryId)async{
  try{
    final url =Uri.parse('${ApiUrls.announcement_category_filter}/$categoryId');
    final response = await http.get(url);
    if(response.statusCode==200){
      print('dataIs : ${response.body}');
      List<dynamic> jsonList = jsonDecode(response.body);
      List<CategoriesAnnouncements> categoriesList = jsonList.map((e) => CategoriesAnnouncements.fromJson(e)).toList();
      categoriesAnnouncements.assignAll(categoriesList);
      print('categoriesAnnouncements: $categoriesAnnouncements');
    }
  }catch(e){
    print('error : $e');
  }finally{
    isLoading(false);

  }

  }
}