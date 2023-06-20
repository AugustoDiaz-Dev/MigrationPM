import 'dart:convert';
import 'package:http/http.dart';
import 'package:intl/intl.dart';

class WorldTime {
  String? location;
  String time = "";
  String? flag;
  String? url;
  late bool isDaytime;
  WorldTime({required this.location, required this.flag, required this.url});

  Future<void> getTime() async {
    try {
      // Make the request
      Response response =
          await get(Uri.parse('http://worldtimeapi.org/api/timezone/$url'));
      Map data = jsonDecode(response.body);
      // print(data);
      // Get properties from data
      String datetime = data['datetime'];
      // print(dateTime);

      // Create a datetime object
      DateTime now = DateTime.parse(datetime.substring(0, 26));

      // Set the time property
      isDaytime = now.hour > 6 && now.hour < 20 ? true : false;
      time = DateFormat.jm().format(now);
    } catch (e) {
      print('Caught error:  + $e');
      time = 'Could not get time data';
    }
  }
}
