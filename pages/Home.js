import  {View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Home = () => {
    const renderItem = ({ item }) => (
        <View style={styles.item}>

            <View>
                <Text style={styles.course}>{item.course}</Text>
                <Text style={styles.date}>{item.date}</Text>
            </View>
           
           <View style={styles.iconStatus}>
            {item.status === "Present" 
                ? <MaterialIcons name="check-circle" size={15} color="green" />
                : <MaterialIcons name="cancel" size={15} color="red" />
            }
           

            <Text
            style={
                item.status === "Present" 
                ? styles.present 
                : styles.absent
                }
            >{item.status}</Text>
             </View>
            
        </View>
    );

    const presentCount = history.filter(item => item.status === "Present").length;
    const absentCount = history.filter(item => item.status === "Absent").length;

    return (
    <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Attendance App</Text>

        <View style={styles.card}>
            <View style={styles.icon}>
                <MaterialIcons name="person" size={40} color="#555" />
            </View>
            <View>
                <Text style={styles.name}>Alyza Septia Anjani</Text>
                <Text>NIM : 0920240015</Text>
                <Text>Class : TRPL-2B</Text>
            </View>
        </View>
        <View style={styles.classCard}>
            <Text style={styles.subtitle}>Today's Class</Text>
            <Text>Mobile Programming</Text>
            <Text>08:00 - 10:00</Text>
            <Text>Lab 3</Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>CHECK IN</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.classCard}>
            <Text style={styles.subtitle}>Upcoming Class</Text>
            <Text>Web Programming</Text>
            <Text>13:00 - 16:00</Text>
            <Text>Lab 3</Text>
        </View>

        <Text style={styles.subtitle}>Attendance Summary</Text>
        <View style={styles.classCard}>
            <Text style={styles.present}>Present: {presentCount}</Text>
            <Text style={styles.absent}>Absent: {absentCount}</Text>
        </View>

        <Text style={styles.subtitle}>Attendance History</Text>
            <FlatList
            data={history}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            scrollEnabled={false}
            />
        
        </ScrollView>
    </SafeAreaView>
    );
};

const history = [
    {id: "1", course: "Mobile Programming", date: "2026-03-01", status: "Present"},
    {id: "2", course: "Database System", date: "2026-03-02", status: "Present"},
    {id: "3", course: "Operating System", date: "2026-03-03", status: "Absent"},
    {id: "4", course: "Computer Network", date: "2026-03-04", status: "Present"},
    {id: "5", course: "Artificial Intelligent", date: "2026-03-05", status: "Present"},
    {id: "6", course: "English Course", date: "2026-03-06", status: "Absent"},
    {id: "7", course: "Mathematics", date: "2026-03-07", status: "Present"},
    {id: "8", course: "Computer Network", date: "2026-03-08", status: "Present"},
    {id: "9", course: "Statistics", date: "2026-03-09", status: "Present"},
    {id: "10", course: "Management Business Process", date: "2026-03-10", status: "Absent"},
    {id: "11", course: "Mobile Programming", date: "2026-03-11", status: "Present"},
    {id: "12", course: "Statistics", date: "2026-03-12", status: "Present"},
    {id: "13", course: "Operating System", date: "2026-03-13", status: "Absent"},
    {id: "14", course: "Artificial Intelligent", date: "2026-03-14", status: "Absent"},
    {id: "15", course: "Machine Learning", date: "2026-03-15", status: "Present"},
    {id: "16", course: "English Course", date: "2026-03-16", status: "Absent"},
    {id: "17", course: "Management Business Process", date: "2026-03-17", status: "Present"},
    {id: "18", course: "Database System", date: "2026-03-18", status: "Present"},
    {id: "19", course: "Mathematics", date: "2026-03-19", status: "Present"},
    {id: "20", course: "Artificial Intelligent", date: "2026-03-20", status: "Present"},
]

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#F5F5F5"
    },

    title: {
        fontSize: 24,
        fontWeight: "bold"
    },

    card: {
        flexDirection: "row",
        backgroundColor: "white",
        padding: 15,
        borderRadius: 10,
        marginBottom: 20
    },

    icon: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#eee",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 15
    },

    iconStatus: {
        flexDirection: "row",
        alignItems: "center"
    },

    name: {
        fontSize: 18,
        fontWeight: "bold"
    },

    classCard: {
        backgroundColor: "white",
        padding: 15,
        borderRadius: 10,
        marginBottom: 20
    },

    subtitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10
    },

    button: {
        marginTop: 10,
        backgroundColor: "#007AFF",
        padding: 10,
        borderRadius: 8,
        alignItems: "center"
    },

    buttonText: {
        color: "white"
    },

    content: {
        padding: 20,
        paddingBottom: 40
    },

    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        alignItems: "center",
        padding: 12,
        borderRadius: 8,
        marginBottom: 8
    },

    course: {
        fontSize: 16
    },

    date: {
        fontSize: 12,
        color: "gray"
    },

    present: {
        color: "green",
        fontWeight: "bold",
        marginLeft: 2
    },

    absent: {
        color: "red",
        fontWeight: "bold",
        marginLeft: 2
    },
});