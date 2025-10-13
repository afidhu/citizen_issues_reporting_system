import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:get/get.dart';
import 'package:get/get_core/src/get_main.dart';


class CommentButton extends StatelessWidget {
  const CommentButton({super.key});

  @override
  Widget build(BuildContext context) {
    return IconButton(
        onPressed: (){

          Get.bottomSheet(
            Container(
              width:Get.width*0.95,
              height:Get.height*0.7,
              padding: EdgeInsets.all(20),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(20),
                color: Colors.grey[50],
              ),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text('comment Now!!!', style: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                  ),
              ),
                  TextField(
                    maxLines: 100,
                    minLines: 1,
                    keyboardType: TextInputType.multiline,
                    decoration: InputDecoration(
                      hintText: 'comment here',
                      fillColor: Colors.white,
                      filled: true,
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(20),
                      )
                    ),
                  ),
                  SizedBox(height: 10,),
                  MaterialButton(
                    color: Colors.deepPurpleAccent,
                      onPressed: (){
                      Get.back();
                      },
                    child: Text('Comment'),
                  )
                ],
              ),
            )
          );

        },
        icon: Icon(Icons.comment)
    );
  }
}
