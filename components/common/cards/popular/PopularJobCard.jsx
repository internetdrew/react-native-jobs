import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './popularjobcard.style';

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  const empLogo = item?.item?.employer_logo;
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => console.log(item.item.job_title)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          style={styles.logoImage}
          source={{ uri: empLogo }}
          resizeMode='contain'
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
