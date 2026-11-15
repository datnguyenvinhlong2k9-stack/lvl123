// ===== TÙY CHỈNH THÔNG TIN BÀI HÁT TẠI ĐÂY =====
const songSettings = {
  title: "Lưu Vào Lòng ",
  authors: "Tập thể lớp [12A14]",
  // Dán đường dẫn MP3 công khai vào giữa dấu ngoặc kép sau đây.
  // Ví dụ: "https://drive.google.com/file/d/1RpF6uQgGdd8i1t5QR7VNnFJXeH_I6-DF/view"
  audioUrl: "OKOKOKOKOKOKOKO.mp3",
  // Mỗi đoạn lời bài hát là một phần tử trong mảng.
  // Dùng \n để xuống dòng trong cùng một đoạn.
// ==============================================

document.title = `${songSettings.title} | Góc âm nhạc lớp mình`;
document.getElementById("songTitle").textContent = songSettings.title;
document.getElementById("authors").textContent = songSettings.authors;
document.getElementById("year").textContent = new Date().getFullYear();

const lyricsBox = document.getElementById("lyricsContent");
lyricsBox.replaceChildren();
songSettings.lyrics.forEach((text, index) => {
  const paragraph = document.createElement("p");
  paragraph.className = index === songSettings.lyrics.length - 1 ? "chorus" : "verse";
  paragraph.textContent = text.trim();
  lyricsBox.appendChild(paragraph);
});

const player = document.getElementById("audioPlayer");
const source = document.getElementById("audioSource");
const note = document.getElementById("audioNote");
if (songSettings.audioUrl.trim()) {
  source.src = songSettings.audioUrl.trim();
  player.load();
  note.textContent = "Nhấn nút phát để nghe ca khúc của lớp.";
} else {
  player.hidden = true;
  note.textContent = "Chưa thêm đường dẫn nhạc. Bạn có thể bổ sung audioUrl trong script.js.";
}
