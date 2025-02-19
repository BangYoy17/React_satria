export default function RiwayatPendidikan(){
    return(
        <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="font-bold text-2x1">Riwayat Pendidikan</h2>
        <RowRiwayat jenjang="SD" sekolah="SDN 3 RANCAEKEK" tahun="2011-2016"/>
        <RowRiwayat jenjang="SMP" sekolah="SMPN 3 RANCAEKEK" tahun="2016-2019"/>
        <RowRiwayat jenjang="SMA" sekolah="SMAN 1 RANCAEKEK" tahun="2019-2022"/>
        <RowRiwayat jenjang="KULIAH" sekolah="MA`SOEM UNIVERSITY" tahun="2022-Sekarang"/>
      </div>
    );
}
interface RowRiwayatProps{
    jenjang: string;
    sekolah: string;
    tahun: string;
  }
  function RowRiwayat(props: RowRiwayatProps){
    return(
  
    <div className="border-2 border-blue-900 rounded-lg bg-blue-300 p-2 my-5">
      <div className="container mx-auto">
        <div className="grid grid-cois-12 gap-1">
          <div className="col-span-12 md:col-span-4">{props.jenjang}</div>
          <div className="col-span-12 md:col-span-4">{props.sekolah}</div>
          <div className="col-span-12 md:col-span-4">{props.tahun}</div>
        </div>
      </div>
    </div>
  
    );
  }
