let styles = ["Jazz", "Blues"];

styles[styles.length] = "Rock-n-Roll";
styles[Math.floor(styles.length)] = "Classic";

delete styles[0];
styles.length;
