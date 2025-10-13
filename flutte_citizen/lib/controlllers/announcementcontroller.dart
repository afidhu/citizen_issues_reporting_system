import 'dart:convert';

import 'package:flutte_citizen/ApiProvider/Apiprovider.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:http/http.dart' as http;

import '../model/announcementmodel.dart';
import '../model/filterannouncementByCategory.dart';

class AnnouncementsController extends GetxController{

  @override
  void onInit() {
    // TODO: implement onInit
    super.onInit();
    getAnnouncements();
  }
  var announcements =<AnnouncementsModel>[].obs;
  var isLoading = true.obs;

  Future<void> getAnnouncements()async{
    try{
      final url =Uri.parse(ApiUrls.announcements);
      final response = await http.get(url);
      if(response.statusCode==200){
        // print('dataIs : ${response.body}');
        List<dynamic> jsonList = jsonDecode(response.body);
        List<AnnouncementsModel> announcementsList = jsonList.map((e) => AnnouncementsModel.fromJson(e)).toList();
        announcements.assignAll(announcementsList);
        // print('categoriesAnnouncements: $announcementsList');
      }
    }catch(e){
      print('error : $e');
    }finally{
      isLoading(false);

    }

  }
}