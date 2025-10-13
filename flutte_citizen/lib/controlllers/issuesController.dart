import 'dart:convert';
import 'dart:io';
import 'package:file_picker/file_picker.dart';
import 'package:flutte_citizen/ApiProvider/Apiprovider.dart';
import 'package:flutte_citizen/model/addIssuesModal.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:http/http.dart' as http;
import '../model/issuesmodel.dart';
import '../views/home.dart';
import 'cameracontroller.text';
import 'filesController.text';
import 'mediasController.dart';

class IssuesController extends GetxController{


  Future <void>  deleteIssuesDiolog(String issues_id) async{
    Get.defaultDialog(
      title: 'Delete Issues',
      content: Column(
        children: [
          Text('Do you Want to delete Issues $issues_id ??', style: TextStyle(fontSize: 18),),
          Text('I will not appear once you Delete',style: TextStyle(fontSize: 10),)
        ],
      ),
        confirm: MaterialButton(
            color: Colors.red,
            onPressed: (){
              Get.back();
              deleteIssues(issues_id);
            },
            child:Text('Yes')
        ),
        cancel: MaterialButton(
            color: Colors.green,
            onPressed: (){
              Get.back();
            },
            child: Text('No')
        ),
    );
  }


  Future <void>  deleteIssues(String issues_id) async{
    Get.snackbar('Success', 'issues delete $issues_id',borderWidth: double.infinity,backgroundColor: Colors.blue, colorText: Colors.white);
    Get.offAll(()=>HomeScreen());
  }




  @override
  void onInit() {
    // TODO: implement onInit
    super.onInit();
    getIssues();
  }
  ///////////Get Issuess Data
var issuesData = <IssuesModel>[].obs;
Future<void> getIssues() async{
  try{
      final url = Uri.parse(ApiUrls.Issues);
      var response = await http.get(url);
      if(response.statusCode == 200) {
        // print('dataIs : ${response.body}');
        List<dynamic>  jsonlist = jsonDecode(response.body);
        List<IssuesModel> issues = jsonlist.map((e) => IssuesModel.fromJson(e)).toList();
        issuesData.assignAll(issues);
      }
  }catch(e){
    print('error : $e');

  } finally{}
}


///////ADD Issues

  MediasController mediasController = Get.put(MediasController());

  TextEditingController titleController = TextEditingController();
  TextEditingController descriptionController = TextEditingController();
  TextEditingController categoryController = TextEditingController();
  TextEditingController latitudeController = TextEditingController();
  TextEditingController longitudeController = TextEditingController();
  TextEditingController addressController = TextEditingController();

// Example: this might come from logged-in user

  Future<void> addIssues() async {
    print('MyfilePath: ${mediasController.uploadFilePath.value}');
    try {
      final uri = Uri.parse(ApiUrls.Issues);
      var request = http.MultipartRequest('POST', uri);

      request.fields['userId'] = '1';
      request.fields['title'] = titleController.text.trim();
      request.fields['description'] = descriptionController.text.trim();
      request.fields['categoryId'] = '1';
      request.fields['latitude'] = '1';
      request.fields['longitude'] = '1';
      request.fields['address'] = addressController.text.trim();


      request.files.add(await http.MultipartFile.fromPath('file',mediasController.uploadFilePath.value));
      var streamedResponse = await request.send();

      var response = await http.Response.fromStream(streamedResponse);
      if (response.statusCode == 200 || response.statusCode == 201) {
        print(' Response data: ${response.body}');
        Get.snackbar('Success', 'Issue Added',
            backgroundColor: Colors.blue, colorText: Colors.white);
        Get.offAll(() => HomeScreen());
      } else {
        print(' Error: ${response.statusCode} - ${response.body}');
        Get.snackbar('Error', 'Failed to add issue');
      }
    } catch (e) {
      print('⚠ Exception: $e');
      Get.snackbar('Error', 'Something went wrong');
    }
  }




}