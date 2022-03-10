package com.example.backend.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProductMapper {

	List<FileBoardVO> getFileBoardList(); //게시글 리스트 출력

	FileBoardVO fileBoardDetail(int b_no); //게시글 세부내용 보기

	int fileBoardInsert(FileBoardVO fileBoard); //게시글 생성

	int fileBoardUpdate(FileBoardVO fileBoard); //게시글 수정

	int fileBoardDelete(int bno); //게시글 삭제

	int fileInsert(FileVO file); // 파일 업로드 메서드

	FileVO fileDetail(int b_no);

	int fileDelete(int b_no);
}
