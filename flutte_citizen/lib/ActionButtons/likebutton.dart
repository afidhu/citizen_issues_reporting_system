import 'package:flutter/material.dart';
import 'package:get/get.dart';

class LikeButton extends StatefulWidget {
  const LikeButton({super.key});

  @override
  State<LikeButton> createState() => _LikeButtonState();
}

class _LikeButtonState extends State<LikeButton> {
  
  var isClicked = false.obs;
  @override
  Widget build(BuildContext context) {
    return IconButton(onPressed: (){
      isClicked.value = ! isClicked.value;
    },
        icon: Obx(()=>Icon(Icons.thumb_up,color:isClicked.value? Colors.white  : Colors.black,fontWeight: FontWeight.bold,))
    );
  }
}
