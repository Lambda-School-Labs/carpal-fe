import {
    REQUEST_START,
    REQUEST_SUCCESS,
    REQUEST_ERROR,
    SET_USER,
    SET_EDITING,
    SET_PROFILE_UPDATE,
    SET_FAVORITE_LOCATION,
    ADD_LOCATION,
    HANDLE_INCOMING_REQUESTS,
    HANDLE_OUTGOING_REQUESTS,
    CANCEL_RIDE_REQUEST
} from "../Actions/UserAction";

const initialState = {
    isLoading: false,
    error: null,
    user: {
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        is_driver: true,
        hobbies: [],
        audioLikes: [],
        audioDislikes: [],
        favoriteLocation: [
            {
                latitude: 32.715736,
                longitude: -117.161087
            }
        ],
        savedRides: [
            {
                id: 1,
                name: "Path to Work"
            },
            {
                id: 2,
                name: "Grocery Run"
            }
        ],
        incoming_ride_requests: [],
        outgoing_ride_requests: []
    },
    isEditing: false
};

export function UserReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_START:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null
            };
        case REQUEST_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case SET_USER:
            return {
                ...state,

                user: {
                    ...state.user,
                    ...action.payload
                }
            };
        case SET_EDITING:
            return {
                ...state,
                isEditing: !state.isEditing
            };
        case SET_PROFILE_UPDATE:
            return {
                ...state,
                user: action.payload
            };
        case SET_FAVORITE_LOCATION:
            return {
                ...state,
                user: {
                    ...state.user,
                    favoriteLocation: [
                        ...state.user.favoriteLocation,
                        action.payload
                    ]
                }
            };
        case ADD_LOCATION:
            return {
                ...state,
                user: {
                    ...state.user,
                    savedRides: [...state.user.savedRides, action.payload]
                }
            };
        case HANDLE_INCOMING_REQUESTS:
            return {
                ...state,
                user: {
                    ...state.user,
                    incoming_ride_requests: [
                        ...state.user.incoming_ride_requests,
                        action.payload
                    ]
                }
            };

        case HANDLE_OUTGOING_REQUESTS:
            return {
                ...state,
                user: {
                    ...state.user,
                    outgoing_ride_requests: [
                        ...state.user.outgoing_ride_requests,
                        action.payload
                    ]
                }
            };

        case CANCEL_RIDE_REQUEST:
            return {
                ...state,
                user: {
                    ...state.user,
                    outgoing_ride_requests: [
                        ...state.user.outgoing_ride_requests,
                        action.payload
                    ]
                }
            };
        default:
            return state;
    }
}
