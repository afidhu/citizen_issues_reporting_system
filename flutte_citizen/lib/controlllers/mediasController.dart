
import 'package:get/get.dart';
import 'package:image_picker/image_picker.dart';
import 'package:file_picker/file_picker.dart';


class MediasController extends GetxController{
  final ImagePicker picker = ImagePicker();

  ////////////////////////////Media Logics////////////////////////////////////////
  var uploadFilePath = ''.obs;
  Future<void> CapturePhoto() async {
    // Capture a photo.
    final XFile? image = await picker.pickImage(source: ImageSource.gallery);
    uploadFilePath.value = image!.path;
  }

  Future<void> captureImages() async {
    // Capture a photo.
    final XFile? photo = await picker.pickImage(source: ImageSource.camera);
    uploadFilePath.value = photo!.path;
  }

  Future<void> pickVideo() async {
    // Pick a video.
    final XFile? galleryVideo = await picker.pickVideo(source: ImageSource.gallery,);
    uploadFilePath.value = galleryVideo!.path;
  }

  Future<void> videoRecord() async {
    // Capture a video.
    final XFile? cameraVideo = await picker.pickVideo( source: ImageSource.camera);
    uploadFilePath.value = cameraVideo!.path;
  }

  Future<void> pickMultipleImage() async {
    // Pick multiple images.
    final List<XFile> images = await picker.pickMultiImage();
    uploadFilePath.value = images.toString();
  }

  Future<void> pickSingleImageOrVideo() async {
    // Pick singe image or video.
    final XFile? media = await picker.pickMedia();
    uploadFilePath.value = media!.path;
  }



  Future <void> pickFiles() async{
    FilePickerResult? result = await FilePicker.platform.pickFiles(allowMultiple: true,);
    if (result != null) {
      PlatformFile file = result.files.first;

      print(file.name);
      print(file.bytes);
      print(file.size);
      print(file.extension);
      uploadFilePath.value = file.path!;
      print(file.path);
    } else {
      // User canceled the picker
    }
  }



}

