import * as fs from 'fs';
import * as path from 'path'
import { exec } from 'child_process'; // 새로운 프로세스를 생성하여 실행하는 node.js 내장 모듈
import * as util from 'util';//? 내장 모듈

const asyncExec = util.promisify(exec); // 위 child_process 모듈의 exec을 이용해 반복문으로 프로세스를 생성할 때 비동기를 동기로 바꿔줄 때 필요

/*
데이터베이스 테이블을 만드는 파일
* */

console.log(`
  --------------------------------------
  +++Laggard Project Migration Start+++
  --------------------------------------
`);

const migrationAllTable = async () => {
    const migrationFiles : string[] = [];
//     // 파일 시스템으로 디렉토리 자체를 읽어온다.
    const DBPATH:string = path.join(__dirname,"/table/");
    fs.readdir(DBPATH, async (err,files) => {
        if(err) console.log("err : ", err);
        if(files) {
            //? 읽어온 파일들의 이름을 하나씩 배열에 담아준다.
            files.forEach(el => {
                migrationFiles.push(el);
            })

            //? 배열에 담은 파일의 이름을 이용해 마이그레이션 실행
            for(let el of migrationFiles) {
                const { stdout, stderr } = await asyncExec(`./node_modules/.bin/ts-node "${DBPATH}${el}"`)
                if(stdout) console.log(stdout);
                if(stderr) console.error("Std Err : ",stderr);
            }
        }
    })
}
migrationAllTable()
