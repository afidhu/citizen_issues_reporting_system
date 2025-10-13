import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../controlllers/cameracontroller.text';

class MediaCardDiolog extends GetxController{

  CameraVideoController cameraVideoController =Get.put(CameraVideoController());
 void  mediacardButtomSheet(){
    Get.bottomSheet(
      Container(
        width: double.infinity,
        height: Get.height*0.3,
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.only(topLeft: Radius.circular(20),topRight: Radius.circular(20))
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                GestureDetector(
                  onTap:cameraVideoController.CapturePhoto,
                  child: CircleAvatar(
                    child: Icon(Icons.image),
                  ),
                ),
                GestureDetector(
                  onTap:cameraVideoController.captureImages,
                  child: CircleAvatar(
                    child: Icon(Icons.camera_alt),
                  ),
                ),
                GestureDetector(
                  onTap:cameraVideoController.pickVideo,
                  child: CircleAvatar(
                    child: Icon(Icons.video_file),
                  ),
                ),
              ],
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                GestureDetector(
                  onTap:cameraVideoController.videoRecord,
                  child: CircleAvatar(
                    child: Icon(Icons.video_camera_back),
                  ),
                ),
                GestureDetector(
                  onTap:cameraVideoController.pickMultipleImage,
                  child: CircleAvatar(
                    child: Icon(Icons.perm_media_outlined),
                  ),
                ),
                GestureDetector(
                  onTap:cameraVideoController.pickSingleImageOrVideo,
                  child: CircleAvatar(
                    child: Icon(Icons.photo_album_outlined),
                  ),
                ),
              ],
            )
          ],
        ),
      )
    );
  }
}