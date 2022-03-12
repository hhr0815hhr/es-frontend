type Long = protobuf.Long;
// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace protos. */
declare namespace protos {

    /** ChatChannel enum. */
    enum ChatChannel {
        Lobby = 0,
        Cow = 1,
        Landlord = 2,
        Gomoku = 3
    }

    /** Properties of a C2S_Chat. */
    interface IC2S_Chat {

        /** C2S_Chat msg */
        msg?: (string|null);

        /** C2S_Chat channel */
        channel?: (number|null);

        /** C2S_Chat time */
        time?: (number|Long|null);
    }

    /** Represents a C2S_Chat. */
    class C2S_Chat implements IC2S_Chat {

        /**
         * Constructs a new C2S_Chat.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IC2S_Chat);

        /** C2S_Chat msg. */
        public msg: string;

        /** C2S_Chat channel. */
        public channel: number;

        /** C2S_Chat time. */
        public time: (number|Long);

        /**
         * Creates a new C2S_Chat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2S_Chat instance
         */
        public static create(properties?: protos.IC2S_Chat): protos.C2S_Chat;

        /**
         * Encodes the specified C2S_Chat message. Does not implicitly {@link protos.C2S_Chat.verify|verify} messages.
         * @param message C2S_Chat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IC2S_Chat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified C2S_Chat message, length delimited. Does not implicitly {@link protos.C2S_Chat.verify|verify} messages.
         * @param message C2S_Chat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IC2S_Chat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C2S_Chat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2S_Chat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protos.C2S_Chat;

        /**
         * Decodes a C2S_Chat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2S_Chat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protos.C2S_Chat;

        /**
         * Verifies a C2S_Chat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a S2C_Chat. */
    interface IS2C_Chat {

        /** S2C_Chat msg */
        msg?: (string|null);

        /** S2C_Chat channel */
        channel?: (number|null);

        /** S2C_Chat time */
        time?: (number|Long|null);

        /** S2C_Chat from */
        from?: (number|Long|null);
    }

    /** Represents a S2C_Chat. */
    class S2C_Chat implements IS2C_Chat {

        /**
         * Constructs a new S2C_Chat.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IS2C_Chat);

        /** S2C_Chat msg. */
        public msg: string;

        /** S2C_Chat channel. */
        public channel: number;

        /** S2C_Chat time. */
        public time: (number|Long);

        /** S2C_Chat from. */
        public from: (number|Long);

        /**
         * Creates a new S2C_Chat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2C_Chat instance
         */
        public static create(properties?: protos.IS2C_Chat): protos.S2C_Chat;

        /**
         * Encodes the specified S2C_Chat message. Does not implicitly {@link protos.S2C_Chat.verify|verify} messages.
         * @param message S2C_Chat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IS2C_Chat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified S2C_Chat message, length delimited. Does not implicitly {@link protos.S2C_Chat.verify|verify} messages.
         * @param message S2C_Chat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IS2C_Chat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S2C_Chat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2C_Chat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protos.S2C_Chat;

        /**
         * Decodes a S2C_Chat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2C_Chat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protos.S2C_Chat;

        /**
         * Verifies a S2C_Chat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** CmdType enum. */
    enum CmdType {
        CmdType_None = 0,
        CMD_S2C_Login = 10000,
        CMD_C2S_Login = 10001,
        CMD_S2C_CreateRoom = 20000,
        CMD_C2S_CreateRoom = 20001,
        CMD_S2C_EnterRoom = 20002,
        CMD_C2S_EnterRoom = 20003,
        CMD_S2C_LeaveRoom = 20004,
        CMD_C2S_LeaveRoom = 20005,
        CMD_S2C_RoomList = 20006,
        CMD_C2S_RoomList = 20007,
        CMD_S2C_Ready = 20008,
        CMD_C2S_Ready = 20009,
        CMD_S2C_Cow_Start = 21000,
        CMD_S2C_Cow_Draw = 21001,
        CMD_S2C_Cow_Compare = 21002,
        CMD_S2C_Cow_Ready = 21003,
        CMD_C2S_Chat = 30000,
        CMD_S2C_Chat = 30001
    }

    /** Properties of a S2C_Cow_Start. */
    interface IS2C_Cow_Start {

        /** S2C_Cow_Start CountDown */
        CountDown?: (number|null);

        /** S2C_Cow_Start State */
        State?: (number|null);
    }

    /** Represents a S2C_Cow_Start. */
    class S2C_Cow_Start implements IS2C_Cow_Start {

        /**
         * Constructs a new S2C_Cow_Start.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IS2C_Cow_Start);

        /** S2C_Cow_Start CountDown. */
        public CountDown: number;

        /** S2C_Cow_Start State. */
        public State: number;

        /**
         * Creates a new S2C_Cow_Start instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2C_Cow_Start instance
         */
        public static create(properties?: protos.IS2C_Cow_Start): protos.S2C_Cow_Start;

        /**
         * Encodes the specified S2C_Cow_Start message. Does not implicitly {@link protos.S2C_Cow_Start.verify|verify} messages.
         * @param message S2C_Cow_Start message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IS2C_Cow_Start, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified S2C_Cow_Start message, length delimited. Does not implicitly {@link protos.S2C_Cow_Start.verify|verify} messages.
         * @param message S2C_Cow_Start message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IS2C_Cow_Start, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S2C_Cow_Start message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2C_Cow_Start
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protos.S2C_Cow_Start;

        /**
         * Decodes a S2C_Cow_Start message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2C_Cow_Start
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protos.S2C_Cow_Start;

        /**
         * Verifies a S2C_Cow_Start message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a S2C_Cow_Draw. */
    interface IS2C_Cow_Draw {

        /** S2C_Cow_Draw CountDown */
        CountDown?: (number|null);

        /** S2C_Cow_Draw State */
        State?: (number|null);

        /** S2C_Cow_Draw Cards */
        Cards?: (protos.ICards[]|null);
    }

    /** Represents a S2C_Cow_Draw. */
    class S2C_Cow_Draw implements IS2C_Cow_Draw {

        /**
         * Constructs a new S2C_Cow_Draw.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IS2C_Cow_Draw);

        /** S2C_Cow_Draw CountDown. */
        public CountDown: number;

        /** S2C_Cow_Draw State. */
        public State: number;

        /** S2C_Cow_Draw Cards. */
        public Cards: protos.ICards[];

        /**
         * Creates a new S2C_Cow_Draw instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2C_Cow_Draw instance
         */
        public static create(properties?: protos.IS2C_Cow_Draw): protos.S2C_Cow_Draw;

        /**
         * Encodes the specified S2C_Cow_Draw message. Does not implicitly {@link protos.S2C_Cow_Draw.verify|verify} messages.
         * @param message S2C_Cow_Draw message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IS2C_Cow_Draw, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified S2C_Cow_Draw message, length delimited. Does not implicitly {@link protos.S2C_Cow_Draw.verify|verify} messages.
         * @param message S2C_Cow_Draw message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IS2C_Cow_Draw, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S2C_Cow_Draw message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2C_Cow_Draw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protos.S2C_Cow_Draw;

        /**
         * Decodes a S2C_Cow_Draw message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2C_Cow_Draw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protos.S2C_Cow_Draw;

        /**
         * Verifies a S2C_Cow_Draw message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Cards. */
    interface ICards {

        /** Cards Card */
        Card?: (number[]|null);
    }

    /** Represents a Cards. */
    class Cards implements ICards {

        /**
         * Constructs a new Cards.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.ICards);

        /** Cards Card. */
        public Card: number[];

        /**
         * Creates a new Cards instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Cards instance
         */
        public static create(properties?: protos.ICards): protos.Cards;

        /**
         * Encodes the specified Cards message. Does not implicitly {@link protos.Cards.verify|verify} messages.
         * @param message Cards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.ICards, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Cards message, length delimited. Does not implicitly {@link protos.Cards.verify|verify} messages.
         * @param message Cards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.ICards, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Cards message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Cards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protos.Cards;

        /**
         * Decodes a Cards message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Cards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protos.Cards;

        /**
         * Verifies a Cards message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a S2C_Cow_Compare. */
    interface IS2C_Cow_Compare {

        /** S2C_Cow_Compare CountDown */
        CountDown?: (number|null);

        /** S2C_Cow_Compare State */
        State?: (number|null);

        /** S2C_Cow_Compare CowType */
        CowType?: (string[]|null);

        /** S2C_Cow_Compare Result */
        Result?: (number[]|null);
    }

    /** Represents a S2C_Cow_Compare. */
    class S2C_Cow_Compare implements IS2C_Cow_Compare {

        /**
         * Constructs a new S2C_Cow_Compare.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IS2C_Cow_Compare);

        /** S2C_Cow_Compare CountDown. */
        public CountDown: number;

        /** S2C_Cow_Compare State. */
        public State: number;

        /** S2C_Cow_Compare CowType. */
        public CowType: string[];

        /** S2C_Cow_Compare Result. */
        public Result: number[];

        /**
         * Creates a new S2C_Cow_Compare instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2C_Cow_Compare instance
         */
        public static create(properties?: protos.IS2C_Cow_Compare): protos.S2C_Cow_Compare;

        /**
         * Encodes the specified S2C_Cow_Compare message. Does not implicitly {@link protos.S2C_Cow_Compare.verify|verify} messages.
         * @param message S2C_Cow_Compare message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IS2C_Cow_Compare, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified S2C_Cow_Compare message, length delimited. Does not implicitly {@link protos.S2C_Cow_Compare.verify|verify} messages.
         * @param message S2C_Cow_Compare message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IS2C_Cow_Compare, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S2C_Cow_Compare message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2C_Cow_Compare
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protos.S2C_Cow_Compare;

        /**
         * Decodes a S2C_Cow_Compare message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2C_Cow_Compare
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protos.S2C_Cow_Compare;

        /**
         * Verifies a S2C_Cow_Compare message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a S2C_Cow_Ready. */
    interface IS2C_Cow_Ready {

        /** S2C_Cow_Ready State */
        State?: (number|null);
    }

    /** Represents a S2C_Cow_Ready. */
    class S2C_Cow_Ready implements IS2C_Cow_Ready {

        /**
         * Constructs a new S2C_Cow_Ready.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IS2C_Cow_Ready);

        /** S2C_Cow_Ready State. */
        public State: number;

        /**
         * Creates a new S2C_Cow_Ready instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2C_Cow_Ready instance
         */
        public static create(properties?: protos.IS2C_Cow_Ready): protos.S2C_Cow_Ready;

        /**
         * Encodes the specified S2C_Cow_Ready message. Does not implicitly {@link protos.S2C_Cow_Ready.verify|verify} messages.
         * @param message S2C_Cow_Ready message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IS2C_Cow_Ready, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified S2C_Cow_Ready message, length delimited. Does not implicitly {@link protos.S2C_Cow_Ready.verify|verify} messages.
         * @param message S2C_Cow_Ready message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IS2C_Cow_Ready, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S2C_Cow_Ready message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2C_Cow_Ready
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protos.S2C_Cow_Ready;

        /**
         * Decodes a S2C_Cow_Ready message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2C_Cow_Ready
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protos.S2C_Cow_Ready;

        /**
         * Verifies a S2C_Cow_Ready message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a C2S_Login. */
    interface IC2S_Login {

        /** C2S_Login username */
        username?: (string|null);

        /** C2S_Login password */
        password?: (string|null);
    }

    /** Represents a C2S_Login. */
    class C2S_Login implements IC2S_Login {

        /**
         * Constructs a new C2S_Login.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IC2S_Login);

        /** C2S_Login username. */
        public username: string;

        /** C2S_Login password. */
        public password: string;

        /**
         * Creates a new C2S_Login instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2S_Login instance
         */
        public static create(properties?: protos.IC2S_Login): protos.C2S_Login;

        /**
         * Encodes the specified C2S_Login message. Does not implicitly {@link protos.C2S_Login.verify|verify} messages.
         * @param message C2S_Login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IC2S_Login, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified C2S_Login message, length delimited. Does not implicitly {@link protos.C2S_Login.verify|verify} messages.
         * @param message C2S_Login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IC2S_Login, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C2S_Login message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2S_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protos.C2S_Login;

        /**
         * Decodes a C2S_Login message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2S_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protos.C2S_Login;

        /**
         * Verifies a C2S_Login message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a S2C_Login. */
    interface IS2C_Login {

        /** S2C_Login code */
        code?: (number|null);

        /** S2C_Login msg */
        msg?: (string|null);
    }

    /** Represents a S2C_Login. */
    class S2C_Login implements IS2C_Login {

        /**
         * Constructs a new S2C_Login.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IS2C_Login);

        /** S2C_Login code. */
        public code: number;

        /** S2C_Login msg. */
        public msg: string;

        /**
         * Creates a new S2C_Login instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2C_Login instance
         */
        public static create(properties?: protos.IS2C_Login): protos.S2C_Login;

        /**
         * Encodes the specified S2C_Login message. Does not implicitly {@link protos.S2C_Login.verify|verify} messages.
         * @param message S2C_Login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IS2C_Login, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified S2C_Login message, length delimited. Does not implicitly {@link protos.S2C_Login.verify|verify} messages.
         * @param message S2C_Login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IS2C_Login, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S2C_Login message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2C_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protos.S2C_Login;

        /**
         * Decodes a S2C_Login message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2C_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protos.S2C_Login;

        /**
         * Verifies a S2C_Login message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a C2S_RoomList. */
    interface IC2S_RoomList {

        /** C2S_RoomList RoomType */
        RoomType?: (string|null);
    }

    /** Represents a C2S_RoomList. */
    class C2S_RoomList implements IC2S_RoomList {

        /**
         * Constructs a new C2S_RoomList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IC2S_RoomList);

        /** C2S_RoomList RoomType. */
        public RoomType: string;

        /**
         * Creates a new C2S_RoomList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2S_RoomList instance
         */
        public static create(properties?: protos.IC2S_RoomList): protos.C2S_RoomList;

        /**
         * Encodes the specified C2S_RoomList message. Does not implicitly {@link protos.C2S_RoomList.verify|verify} messages.
         * @param message C2S_RoomList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IC2S_RoomList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified C2S_RoomList message, length delimited. Does not implicitly {@link protos.C2S_RoomList.verify|verify} messages.
         * @param message C2S_RoomList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IC2S_RoomList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C2S_RoomList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2S_RoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protos.C2S_RoomList;

        /**
         * Decodes a C2S_RoomList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2S_RoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protos.C2S_RoomList;

        /**
         * Verifies a C2S_RoomList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a S2C_RoomList. */
    interface IS2C_RoomList {

        /** S2C_RoomList RoomList */
        RoomList?: (protos.IRoomInfo[]|null);
    }

    /** Represents a S2C_RoomList. */
    class S2C_RoomList implements IS2C_RoomList {

        /**
         * Constructs a new S2C_RoomList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IS2C_RoomList);

        /** S2C_RoomList RoomList. */
        public RoomList: protos.IRoomInfo[];

        /**
         * Creates a new S2C_RoomList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2C_RoomList instance
         */
        public static create(properties?: protos.IS2C_RoomList): protos.S2C_RoomList;

        /**
         * Encodes the specified S2C_RoomList message. Does not implicitly {@link protos.S2C_RoomList.verify|verify} messages.
         * @param message S2C_RoomList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IS2C_RoomList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified S2C_RoomList message, length delimited. Does not implicitly {@link protos.S2C_RoomList.verify|verify} messages.
         * @param message S2C_RoomList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IS2C_RoomList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S2C_RoomList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2C_RoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protos.S2C_RoomList;

        /**
         * Decodes a S2C_RoomList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2C_RoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protos.S2C_RoomList;

        /**
         * Verifies a S2C_RoomList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RoomInfo. */
    interface IRoomInfo {

        /** RoomInfo RoomId */
        RoomId?: (number|null);

        /** RoomInfo RoomPlayerNum */
        RoomPlayerNum?: (number|null);

        /** RoomInfo RoomStatus */
        RoomStatus?: (number|null);
    }

    /** Represents a RoomInfo. */
    class RoomInfo implements IRoomInfo {

        /**
         * Constructs a new RoomInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IRoomInfo);

        /** RoomInfo RoomId. */
        public RoomId: number;

        /** RoomInfo RoomPlayerNum. */
        public RoomPlayerNum: number;

        /** RoomInfo RoomStatus. */
        public RoomStatus: number;

        /**
         * Creates a new RoomInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomInfo instance
         */
        public static create(properties?: protos.IRoomInfo): protos.RoomInfo;

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link protos.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IRoomInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link protos.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IRoomInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protos.RoomInfo;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protos.RoomInfo;

        /**
         * Verifies a RoomInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a C2S_CreateRoom. */
    interface IC2S_CreateRoom {

        /** C2S_CreateRoom RoomType */
        RoomType?: (string|null);

        /** C2S_CreateRoom RoomName */
        RoomName?: (string|null);
    }

    /** Represents a C2S_CreateRoom. */
    class C2S_CreateRoom implements IC2S_CreateRoom {

        /**
         * Constructs a new C2S_CreateRoom.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IC2S_CreateRoom);

        /** C2S_CreateRoom RoomType. */
        public RoomType: string;

        /** C2S_CreateRoom RoomName. */
        public RoomName: string;

        /**
         * Creates a new C2S_CreateRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2S_CreateRoom instance
         */
        public static create(properties?: protos.IC2S_CreateRoom): protos.C2S_CreateRoom;

        /**
         * Encodes the specified C2S_CreateRoom message. Does not implicitly {@link protos.C2S_CreateRoom.verify|verify} messages.
         * @param message C2S_CreateRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IC2S_CreateRoom, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified C2S_CreateRoom message, length delimited. Does not implicitly {@link protos.C2S_CreateRoom.verify|verify} messages.
         * @param message C2S_CreateRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IC2S_CreateRoom, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C2S_CreateRoom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2S_CreateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protos.C2S_CreateRoom;

        /**
         * Decodes a C2S_CreateRoom message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2S_CreateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protos.C2S_CreateRoom;

        /**
         * Verifies a C2S_CreateRoom message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a S2C_CreateRoom. */
    interface IS2C_CreateRoom {

        /** S2C_CreateRoom code */
        code?: (number|null);
    }

    /** Represents a S2C_CreateRoom. */
    class S2C_CreateRoom implements IS2C_CreateRoom {

        /**
         * Constructs a new S2C_CreateRoom.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IS2C_CreateRoom);

        /** S2C_CreateRoom code. */
        public code: number;

        /**
         * Creates a new S2C_CreateRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2C_CreateRoom instance
         */
        public static create(properties?: protos.IS2C_CreateRoom): protos.S2C_CreateRoom;

        /**
         * Encodes the specified S2C_CreateRoom message. Does not implicitly {@link protos.S2C_CreateRoom.verify|verify} messages.
         * @param message S2C_CreateRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IS2C_CreateRoom, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified S2C_CreateRoom message, length delimited. Does not implicitly {@link protos.S2C_CreateRoom.verify|verify} messages.
         * @param message S2C_CreateRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IS2C_CreateRoom, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S2C_CreateRoom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2C_CreateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protos.S2C_CreateRoom;

        /**
         * Decodes a S2C_CreateRoom message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2C_CreateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protos.S2C_CreateRoom;

        /**
         * Verifies a S2C_CreateRoom message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a C2S_EnterRoom. */
    interface IC2S_EnterRoom {

        /** C2S_EnterRoom RoomId */
        RoomId?: (number|null);

        /** C2S_EnterRoom RoomType */
        RoomType?: (string|null);
    }

    /** Represents a C2S_EnterRoom. */
    class C2S_EnterRoom implements IC2S_EnterRoom {

        /**
         * Constructs a new C2S_EnterRoom.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IC2S_EnterRoom);

        /** C2S_EnterRoom RoomId. */
        public RoomId: number;

        /** C2S_EnterRoom RoomType. */
        public RoomType: string;

        /**
         * Creates a new C2S_EnterRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2S_EnterRoom instance
         */
        public static create(properties?: protos.IC2S_EnterRoom): protos.C2S_EnterRoom;

        /**
         * Encodes the specified C2S_EnterRoom message. Does not implicitly {@link protos.C2S_EnterRoom.verify|verify} messages.
         * @param message C2S_EnterRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IC2S_EnterRoom, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified C2S_EnterRoom message, length delimited. Does not implicitly {@link protos.C2S_EnterRoom.verify|verify} messages.
         * @param message C2S_EnterRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IC2S_EnterRoom, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C2S_EnterRoom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2S_EnterRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protos.C2S_EnterRoom;

        /**
         * Decodes a C2S_EnterRoom message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2S_EnterRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protos.C2S_EnterRoom;

        /**
         * Verifies a C2S_EnterRoom message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a S2C_EnterRoom. */
    interface IS2C_EnterRoom {

        /** S2C_EnterRoom code */
        code?: (number|null);

        /** S2C_EnterRoom playerId */
        playerId?: (number|Long|null);
    }

    /** Represents a S2C_EnterRoom. */
    class S2C_EnterRoom implements IS2C_EnterRoom {

        /**
         * Constructs a new S2C_EnterRoom.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IS2C_EnterRoom);

        /** S2C_EnterRoom code. */
        public code: number;

        /** S2C_EnterRoom playerId. */
        public playerId: (number|Long);

        /**
         * Creates a new S2C_EnterRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2C_EnterRoom instance
         */
        public static create(properties?: protos.IS2C_EnterRoom): protos.S2C_EnterRoom;

        /**
         * Encodes the specified S2C_EnterRoom message. Does not implicitly {@link protos.S2C_EnterRoom.verify|verify} messages.
         * @param message S2C_EnterRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IS2C_EnterRoom, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified S2C_EnterRoom message, length delimited. Does not implicitly {@link protos.S2C_EnterRoom.verify|verify} messages.
         * @param message S2C_EnterRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IS2C_EnterRoom, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S2C_EnterRoom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2C_EnterRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protos.S2C_EnterRoom;

        /**
         * Decodes a S2C_EnterRoom message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2C_EnterRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protos.S2C_EnterRoom;

        /**
         * Verifies a S2C_EnterRoom message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a C2S_LeaveRoom. */
    interface IC2S_LeaveRoom {

        /** C2S_LeaveRoom RoomId */
        RoomId?: (number|null);

        /** C2S_LeaveRoom RoomType */
        RoomType?: (string|null);
    }

    /** Represents a C2S_LeaveRoom. */
    class C2S_LeaveRoom implements IC2S_LeaveRoom {

        /**
         * Constructs a new C2S_LeaveRoom.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IC2S_LeaveRoom);

        /** C2S_LeaveRoom RoomId. */
        public RoomId: number;

        /** C2S_LeaveRoom RoomType. */
        public RoomType: string;

        /**
         * Creates a new C2S_LeaveRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2S_LeaveRoom instance
         */
        public static create(properties?: protos.IC2S_LeaveRoom): protos.C2S_LeaveRoom;

        /**
         * Encodes the specified C2S_LeaveRoom message. Does not implicitly {@link protos.C2S_LeaveRoom.verify|verify} messages.
         * @param message C2S_LeaveRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IC2S_LeaveRoom, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified C2S_LeaveRoom message, length delimited. Does not implicitly {@link protos.C2S_LeaveRoom.verify|verify} messages.
         * @param message C2S_LeaveRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IC2S_LeaveRoom, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C2S_LeaveRoom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2S_LeaveRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protos.C2S_LeaveRoom;

        /**
         * Decodes a C2S_LeaveRoom message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2S_LeaveRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protos.C2S_LeaveRoom;

        /**
         * Verifies a C2S_LeaveRoom message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a S2C_LeaveRoom. */
    interface IS2C_LeaveRoom {

        /** S2C_LeaveRoom code */
        code?: (number|null);

        /** S2C_LeaveRoom playerId */
        playerId?: (number|Long|null);
    }

    /** Represents a S2C_LeaveRoom. */
    class S2C_LeaveRoom implements IS2C_LeaveRoom {

        /**
         * Constructs a new S2C_LeaveRoom.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IS2C_LeaveRoom);

        /** S2C_LeaveRoom code. */
        public code: number;

        /** S2C_LeaveRoom playerId. */
        public playerId: (number|Long);

        /**
         * Creates a new S2C_LeaveRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2C_LeaveRoom instance
         */
        public static create(properties?: protos.IS2C_LeaveRoom): protos.S2C_LeaveRoom;

        /**
         * Encodes the specified S2C_LeaveRoom message. Does not implicitly {@link protos.S2C_LeaveRoom.verify|verify} messages.
         * @param message S2C_LeaveRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IS2C_LeaveRoom, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified S2C_LeaveRoom message, length delimited. Does not implicitly {@link protos.S2C_LeaveRoom.verify|verify} messages.
         * @param message S2C_LeaveRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IS2C_LeaveRoom, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S2C_LeaveRoom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2C_LeaveRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protos.S2C_LeaveRoom;

        /**
         * Decodes a S2C_LeaveRoom message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2C_LeaveRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protos.S2C_LeaveRoom;

        /**
         * Verifies a S2C_LeaveRoom message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a C2S_Ready. */
    interface IC2S_Ready {

        /** C2S_Ready roomId */
        roomId?: (number|null);

        /** C2S_Ready roomType */
        roomType?: (string|null);

        /** C2S_Ready Ready */
        Ready?: (number|null);
    }

    /** Represents a C2S_Ready. */
    class C2S_Ready implements IC2S_Ready {

        /**
         * Constructs a new C2S_Ready.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IC2S_Ready);

        /** C2S_Ready roomId. */
        public roomId: number;

        /** C2S_Ready roomType. */
        public roomType: string;

        /** C2S_Ready Ready. */
        public Ready: number;

        /**
         * Creates a new C2S_Ready instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2S_Ready instance
         */
        public static create(properties?: protos.IC2S_Ready): protos.C2S_Ready;

        /**
         * Encodes the specified C2S_Ready message. Does not implicitly {@link protos.C2S_Ready.verify|verify} messages.
         * @param message C2S_Ready message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IC2S_Ready, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified C2S_Ready message, length delimited. Does not implicitly {@link protos.C2S_Ready.verify|verify} messages.
         * @param message C2S_Ready message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IC2S_Ready, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C2S_Ready message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2S_Ready
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protos.C2S_Ready;

        /**
         * Decodes a C2S_Ready message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2S_Ready
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protos.C2S_Ready;

        /**
         * Verifies a C2S_Ready message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a S2C_Ready. */
    interface IS2C_Ready {

        /** S2C_Ready code */
        code?: (number|null);

        /** S2C_Ready playerId */
        playerId?: (number|Long|null);
    }

    /** Represents a S2C_Ready. */
    class S2C_Ready implements IS2C_Ready {

        /**
         * Constructs a new S2C_Ready.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IS2C_Ready);

        /** S2C_Ready code. */
        public code: number;

        /** S2C_Ready playerId. */
        public playerId: (number|Long);

        /**
         * Creates a new S2C_Ready instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2C_Ready instance
         */
        public static create(properties?: protos.IS2C_Ready): protos.S2C_Ready;

        /**
         * Encodes the specified S2C_Ready message. Does not implicitly {@link protos.S2C_Ready.verify|verify} messages.
         * @param message S2C_Ready message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IS2C_Ready, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified S2C_Ready message, length delimited. Does not implicitly {@link protos.S2C_Ready.verify|verify} messages.
         * @param message S2C_Ready message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IS2C_Ready, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S2C_Ready message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2C_Ready
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protos.S2C_Ready;

        /**
         * Decodes a S2C_Ready message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2C_Ready
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protos.S2C_Ready;

        /**
         * Verifies a S2C_Ready message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}
