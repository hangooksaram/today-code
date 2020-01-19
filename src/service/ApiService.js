import axios from 'axios';
// axio 가 import가 안되서 안되는지 모르겠음
const board_API_BASE_URL = 'http://localhost:3000/boards';

class ApiService {

    fetchboards() {
        return axios.get(board_API_BASE_URL);
    }

    fetchboardById(boardId) {
        return axios.get(board_API_BASE_URL + '/' + boardId); //boardId -> url
                                                            //
    }

    deleteContent(boardId) {
        return axios.delete(board_API_BASE_URL + '/' + boardId);
    }

    addContent(board) {
        return axios.post(""+board_API_BASE_URL, board);
    }

    editContent(board) {
        return axios.put(board_API_BASE_URL + '/' + board.id, board);
    }

}

export default new ApiService();