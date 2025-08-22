import { useEffect, useRef, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { intervalToDuration, formatDuration } from "date-fns";

const Timer = () => {
  const [elapsed, setElapsed] = useState(0); // ms since start

  const [startTime, setStartTime] = useState(null);

  const startRef = useRef(null);
  const timeoutRef = useRef(null);

  const clearTimers = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  // Schedules the next tick exactly on the next minute boundary since start
  const scheduleNextTick = () => {
    const diff = Date.now() - startRef.current; // ms since start
    // const msUntilNextMinute = 60000 - (diff % 60000);
    const msUntilNextMinute = 1000;

    timeoutRef.current = setTimeout(() => {
      // update elapsed
      setElapsed(Date.now() - startRef.current);
      // schedule the following tick (recalculate to avoid drift)
      scheduleNextTick();
    }, msUntilNextMinute);
  };

  const startTimer = () => {
    clearTimers();
    const now = Date.now();
    startRef.current = Date.now() - 66400000;
    setStartTime(Date.now() - 86400000);
    setElapsed(0);
    scheduleNextTick();
  };

  useEffect(() => clearTimers, []);

  const duration = startTime
    ? intervalToDuration({ start: startTime, end: startTime + elapsed })
    : false;

  const formatted = formatDuration(duration, {
    format: ["days", "hours", "minutes", "seconds"],
    zero: true,
  });

  return (
    <View>
      <Text style={styles.timer}>
        {duration ? (
          formatted
        ) : (
          <Pressable onPress={startTimer}>
            <Text style={styles.timer}>Start Timer</Text>
          </Pressable>
        )}
      </Text>
    </View>
  );
};

const styles = {
  timer: {
    fontSize: 48,
    color: "#ffffff",
    textAlign: "center",
    marginTop: 20,
  },
};

export default Timer;
