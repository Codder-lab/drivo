import { Ride } from '@/types/type';
import { Text, View, StyleSheet, useColorScheme, Image } from 'react-native';
import { LightColors, DarkColors, FONTS, icons } from '@/constants';
import { formatDate, formatTime } from '@/lib/utils';
import { width, height } from '@/constants/Dimensions';

const RideCard = ({
  ride: {
    destination_longitude,
    destination_latitude,
    origin_address,
    destination_address,
    created_at,
    ride_time,
    driver,
    payment_status,
  },
}: {
  ride: Ride;
}) => {
  const theme = useColorScheme() === 'dark' ? DarkColors : LightColors;
  const toImage = useColorScheme() === 'dark' ? icons.toDark : icons.toLight;
  const pointImage =
    useColorScheme() === 'dark' ? icons.pointDark : icons.pointLight;

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: theme.background, borderColor: theme.grayLight },
      ]}
    >
      <View style={styles.cardContent}>
        <View style={styles.topRow}>
          <Image
            source={{
              uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:${destination_longitude},${destination_latitude}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_KEY}`,
            }}
            style={styles.mapImage}
          />

          <View style={styles.locationInfo}>
            <View style={styles.row}>
              <Image source={toImage} style={[styles.icon]} />
              <Text
                style={[styles.locationText, { color: theme.black }]}
                numberOfLines={1}
              >
                {origin_address}
              </Text>
            </View>

            <View style={styles.row}>
              <Image source={pointImage} style={styles.icon} />
              <Text
                style={[styles.locationText, { color: theme.black }]}
                numberOfLines={1}
              >
                {destination_address}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={[styles.infoContainer, { backgroundColor: theme.lightBlack }]}
        >
          <View style={styles.infoRow}>
            <Text style={[styles.label, { color: theme.grayText }]}>
              Date & Time
            </Text>
            <Text style={[styles.value, { color: theme.black }]}>
              {formatDate(created_at)}, {formatTime(ride_time)}
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={[styles.label, { color: theme.grayText }]}>
              Driver
            </Text>
            <Text style={[styles.value, { color: theme.black }]}>
              {driver.first_name} {driver.last_name}
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={[styles.label, { color: theme.grayText }]}>
              Car Seats
            </Text>
            <Text style={[styles.value, { color: theme.black }]}>
              {driver.car_seats}
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={[styles.label, { color: theme.grayText }]}>
              Payment Status
            </Text>
            <Text
              style={[
                styles.value,
                payment_status === 'paid'
                  ? styles.statusPaid
                  : styles.statusUnpaid,
                {
                  color:
                    payment_status === 'paid'
                      ? theme.textSuccess
                      : theme.textDanger,
                },
              ]}
            >
              {payment_status}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RideCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 0.05,
    borderWidth: width * 0.003,
    marginBottom: width * 0.03,
  },
  cardContent: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: width * 0.04,
    width: '100%',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mapImage: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: width * 0.03,
  },
  locationInfo: {
    flex: 1,
    marginHorizontal: width * 0.05,
    gap: width * 0.01,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: width * 0.03,
  },
  icon: {
    width: width * 0.04,
    height: width * 0.04,
    marginRight: width * 0.02,
  },
  locationText: {
    fontSize: width * 0.036,
    fontFamily: FONTS.medium,
    flex: 1,
  },
  infoContainer: {
    marginTop: width * 0.04,
    width: '100%',
    borderRadius: width * 0.03,
    padding: width * 0.03,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: width * 0.02,
  },
  label: {
    fontSize: width * 0.036,
    fontFamily: FONTS.medium,
  },
  value: {
    fontSize: width * 0.036,
    fontFamily: FONTS.bold,
  },
  statusPaid: {
    textTransform: 'capitalize',
  },
  statusUnpaid: {
    textTransform: 'capitalize',
  },
});
