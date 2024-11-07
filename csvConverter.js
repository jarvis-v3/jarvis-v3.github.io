// csvConverter.js
export function convertToCSV(data) {
    const headers = ['Tanggal', 'Nama Kegiatan', 'Petugas', 'Waktu Mulai', 'Waktu Selesai'];
    const rows = data.map(item => [
        item.tanggal,
        item.nama_kegiatan,
        item.petugas,
        item.sebelum_pekerjaan_time,
        item.pekerjaan_selesai_time
    ]);
    
    return [headers, ...rows]
        .map(row => row.join(','))
        .join('\n');
}
