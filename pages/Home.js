import React, { useState, useEffect} from "react";
import  {View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, FlatList, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const initialHistory = [
    { id: "1", course: "Web Programming", date: "2026-03-01", status: "Present" },
    { id: "2", course: "Database System", date: "2026-03-02", status: "Present"},
]

const Home = () => {

    const [historyData, setHistoryData] = useState(initialHistory);
    const [isCheckedIn, setIsCheckedIn] = useState(false);
    const [currentTime, setCurrentTime] = useState('Memuat jam ... ');

    useEffect(() => {
        const timer = setInterval(() => {
        const timeString = new Date().toLocaleTimeString('id-ID', {
        hour: '2-digit', minute: '2-digit', second: '2-digit'
        });
        setCurrentTime(timeString);
        }, 1000);

        return () => clearInterval(timer);
    }, []); 

    // fungsi login absen
    const handleCheckIn = () => {
        if (isCheckedIn) {
            Alert.alert( "Perhatian", "Anda sudah melakukan Check In untuk kelas ini.");
            return;
        }

        // 1.buat data presensi baru
        const newAttendance = {
        id: Date.now().toString(), // membuat ID unik dari timestamp
        course: "Mobile Programming",
        date: new Date().toLocaleDateString('id-ID'), 
        status: "Present"
        };

        // 2.masukkan data baru ke urutan paling atas daftar history
        setHistoryData([newAttendance, ... historyData]);

        // 3.kunci tombol Check In
        setIsCheckedIn(true);
        Alert.alert("Sukses", `Berhasil Check In pada pukul ${currentTime}`);
    };

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

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.headerRow}>
                    <Text style={styles.title}>Attendance App</Text>
                    <Text style={styles.clockText}>{currentTime}</Text>
                </View>

                <View style={styles.card}>
                    <View style={styles.icon}>
                        <MaterialIcons name="person" size={48} color="#555" />
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
                

                    <TouchableOpacity
                        style={[styles.button, isCheckedIn ? styles.buttonDisabled : styles.buttonActive]}
                        onPress={handleCheckIn}
                        disabled={isCheckedIn}
                    >
                        <Text style={styles.buttonText}>
                        {isCheckedIn ? "CHECKED IN" : "CHECK IN"}
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.classCard}>
                    <Text style={styles.subtitle}>Attendance History</Text>

                    <FlatList
                        data={historyData}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                        scrollEnabled={false}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

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

    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },

    clockText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#007AFF',
        fontVariant: ['tabular-nums'],
    },

    buttonActive: {
        backgroundColor: "#007AFF",
    },

    buttonDisabled: {
        backgroundColor: "#A0C4FF",
    },
});