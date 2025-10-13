import 'package:drop_down_list/model/selected_list_item.dart';
import 'package:flutter/material.dart';
import 'package:drop_down_list/drop_down_list.dart';
import 'package:get/get.dart';
import 'package:get/get_core/src/get_main.dart';

import '../model/categoriesModal.dart';

class EditIssuesDetail extends StatefulWidget {
  const EditIssuesDetail({super.key});

  @override
  State<EditIssuesDetail> createState() => _EditIssuesDetailState();
}

class _EditIssuesDetailState extends State<EditIssuesDetail> {
  @override
  var itemSelected = '';

  List<Categories> categories  =[
    Categories(Id: 1,name: 'water break'),
    Categories(Id: 2,name: 'curruction'),
    Categories(Id: 3,name: 'Luku')
  ];
  late final dropdownItems = categories.map((item) {
    return SelectedListItem<String>(// displayed text
      data:item.name,
      isSelected: false,
    );
  }).toList();

  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        title: Text('Edit Issues',textAlign: TextAlign.center,style: TextStyle(fontSize: 30,fontWeight: FontWeight.bold),),
        centerTitle: true,
      ),
      body: Container(
        margin: EdgeInsets.all(20),
        child: SingleChildScrollView(
          child: Column(
            children: [
              TextField(
                keyboardType: TextInputType.multiline,
                decoration: InputDecoration(
                    hintText: 'Enter Your Issue',
                    border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(20)
                    )
                ),
              ),
              SizedBox(height: 10,),
              TextField(
                keyboardType: TextInputType.multiline,
                decoration: InputDecoration(
                    hintText: 'Enter Issues Description ',
                    border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(20)
                    )
                ),
              ),
              SizedBox(height: 10,),
              TextField(
                keyboardType: TextInputType.multiline,
                decoration: InputDecoration(
                    hintText: 'Enter Your place',
                    border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(20)
                    )
                ),
              ),
              SizedBox(height: 10,),
              Container(
                decoration: BoxDecoration(
                    color: Colors.grey[300],
                    borderRadius: BorderRadius.circular(20)
                ),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  mainAxisSize: MainAxisSize.max,
                  children: [
                    TextButton(
                      onPressed: () {
                        FocusManager.instance.primaryFocus?.unfocus();
                        DropDownState<String>(
                          dropDown: DropDown<String>(
                            bottomSheetTitle: const Text("Category"),
                            data:dropdownItems,
                            onSelected: (selectedItems) {
                              List<String> list = [];
                              print(selectedItems.first);
                              FocusManager.instance.primaryFocus?.unfocus();
                              for (var item in selectedItems) {
                                final selectedName = item.data;
                                final selectedId = categories.firstWhere((c) => c.name == selectedName).Id;
                                print('Selected Name: $selectedName, ID: $selectedId');
                                list.add(item.data);
                                setState(() {
                                  itemSelected = item.data;
                                });
                              }

                              ScaffoldMessenger.of(context).showSnackBar(
                                SnackBar(
                                  duration: Duration(seconds: 1),
                                  content: Text(
                                    list.toString(),
                                  ),
                                ),
                              );
                            },
                          ),
                        ).showModal(context);
                      },
                      child: const Text("Select Category"),
                    ),
                    Text(itemSelected)
                  ],
                ),
              ),
              SizedBox(height: 10,),
              Container(
                decoration: BoxDecoration(
                    color: Colors.grey[300],
                    borderRadius: BorderRadius.circular(20)
                ),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    IconButton(
                        onPressed: (){},
                        icon: Icon(Icons.camera_alt)
                    ),
                    IconButton(
                        onPressed: (){},
                        icon: Icon(Icons.upload)
                    ),
                  ],
                ),
              ),
              SizedBox(height: 20,),
              Container(
                width: double.infinity,
                child: TextButton(
                    style: ButtonStyle(
                        backgroundColor: WidgetStatePropertyAll(Colors.green)
                    ),
                    onPressed: (){},
                    child: Text('Update')
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
