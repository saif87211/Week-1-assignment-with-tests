for (let i = 0; i < 1000; i++) {
  setTimeout(
    () => {
      console.log(i);
    },
    (i + 1) * 1000,
  );
}
