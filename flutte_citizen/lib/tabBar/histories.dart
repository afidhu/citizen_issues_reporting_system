import 'package:flutter/material.dart';

class HistoriesPage extends StatefulWidget {
  const HistoriesPage({super.key});

  @override
  State<HistoriesPage> createState() => _HistoriesPageState();
}

class _HistoriesPageState extends State<HistoriesPage> {
  @override
  Widget build(BuildContext context) {
    return ListView.builder(
        itemBuilder: (context,index){
          return Card(
            color: Colors.grey[300],
            shadowColor: Colors.red,
            surfaceTintColor: Colors.yellow,
            child: ListTile(
              leading: CircleAvatar(
                child: Text('$index'),
              ),
              title: Text('issues Title'),
              subtitle: Text('2025.04.04'),
              trailing: OutlinedButton(
                  style: ButtonStyle(
                      backgroundColor: WidgetStatePropertyAll(Colors.red)
                  ),
                  onPressed: (){},
                  child: Icon(Icons.delete, color: Colors.white,)
              ),
            ),
          );
        }
    );
  }
}
