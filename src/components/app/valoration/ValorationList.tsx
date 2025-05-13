import React, { useContext, useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { Context as ValorationContext } from "../../../context/ValorationDaoContext";
import LoadingIndicator from "../common/LoadingIndicator";
import ValorationPanel from "./ValorationPanel";
import { MediumSpacer } from "../../util/Spacer";

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 5
  },
});

function ValorationList({ course }: any) {
  const { state: valorationState, valorationsOfCourse } =
    useContext(ValorationContext);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const GetCourseValorations = async () => {
      await valorationsOfCourse(course.id);
      setLoaded(true);
    };
    GetCourseValorations();
  }, []);

  if (!loaded) {
    return <LoadingIndicator />;
  }

  return (
    <FlatList
      nestedScrollEnabled
      scrollEnabled={false}
      style={styles.content}
      showsVerticalScrollIndicator={false}
      data={valorationState.valorationsOfCourse}
      renderItem={({ item }) => (
        <>
          <ValorationPanel item={item} />
          <MediumSpacer />
        </>
      )}
    />
  );
}

export default ValorationList;
