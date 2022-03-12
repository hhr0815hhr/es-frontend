var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.protos = (function() {

    /**
     * Namespace protos.
     * @exports protos
     * @namespace
     */
    var protos = {};

    /**
     * ChatChannel enum.
     * @name protos.ChatChannel
     * @enum {number}
     * @property {number} Lobby=0 Lobby value
     * @property {number} Cow=1 Cow value
     * @property {number} Landlord=2 Landlord value
     * @property {number} Gomoku=3 Gomoku value
     */
    protos.ChatChannel = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Lobby"] = 0;
        values[valuesById[1] = "Cow"] = 1;
        values[valuesById[2] = "Landlord"] = 2;
        values[valuesById[3] = "Gomoku"] = 3;
        return values;
    })();

    protos.C2S_Chat = (function() {

        /**
         * Properties of a C2S_Chat.
         * @memberof protos
         * @interface IC2S_Chat
         * @property {string|null} [msg] C2S_Chat msg
         * @property {number|null} [channel] C2S_Chat channel
         * @property {number|Long|null} [time] C2S_Chat time
         */

        /**
         * Constructs a new C2S_Chat.
         * @memberof protos
         * @classdesc Represents a C2S_Chat.
         * @implements IC2S_Chat
         * @constructor
         * @param {protos.IC2S_Chat=} [properties] Properties to set
         */
        function C2S_Chat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2S_Chat msg.
         * @member {string} msg
         * @memberof protos.C2S_Chat
         * @instance
         */
        C2S_Chat.prototype.msg = "";

        /**
         * C2S_Chat channel.
         * @member {number} channel
         * @memberof protos.C2S_Chat
         * @instance
         */
        C2S_Chat.prototype.channel = 0;

        /**
         * C2S_Chat time.
         * @member {number|Long} time
         * @memberof protos.C2S_Chat
         * @instance
         */
        C2S_Chat.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new C2S_Chat instance using the specified properties.
         * @function create
         * @memberof protos.C2S_Chat
         * @static
         * @param {protos.IC2S_Chat=} [properties] Properties to set
         * @returns {protos.C2S_Chat} C2S_Chat instance
         */
        C2S_Chat.create = function create(properties) {
            return new C2S_Chat(properties);
        };

        /**
         * Encodes the specified C2S_Chat message. Does not implicitly {@link protos.C2S_Chat.verify|verify} messages.
         * @function encode
         * @memberof protos.C2S_Chat
         * @static
         * @param {protos.IC2S_Chat} message C2S_Chat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2S_Chat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.msg);
            if (message.channel != null && Object.hasOwnProperty.call(message, "channel"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.channel);
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.time);
            return writer;
        };

        /**
         * Encodes the specified C2S_Chat message, length delimited. Does not implicitly {@link protos.C2S_Chat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.C2S_Chat
         * @static
         * @param {protos.IC2S_Chat} message C2S_Chat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2S_Chat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2S_Chat message from the specified reader or buffer.
         * @function decode
         * @memberof protos.C2S_Chat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.C2S_Chat} C2S_Chat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2S_Chat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.C2S_Chat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.msg = reader.string();
                    break;
                case 2:
                    message.channel = reader.int32();
                    break;
                case 3:
                    message.time = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C2S_Chat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.C2S_Chat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.C2S_Chat} C2S_Chat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2S_Chat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2S_Chat message.
         * @function verify
         * @memberof protos.C2S_Chat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2S_Chat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.channel != null && message.hasOwnProperty("channel"))
                if (!$util.isInteger(message.channel))
                    return "channel: integer expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                    return "time: integer|Long expected";
            return null;
        };

        return C2S_Chat;
    })();

    protos.S2C_Chat = (function() {

        /**
         * Properties of a S2C_Chat.
         * @memberof protos
         * @interface IS2C_Chat
         * @property {string|null} [msg] S2C_Chat msg
         * @property {number|null} [channel] S2C_Chat channel
         * @property {number|Long|null} [time] S2C_Chat time
         * @property {number|Long|null} [from] S2C_Chat from
         */

        /**
         * Constructs a new S2C_Chat.
         * @memberof protos
         * @classdesc Represents a S2C_Chat.
         * @implements IS2C_Chat
         * @constructor
         * @param {protos.IS2C_Chat=} [properties] Properties to set
         */
        function S2C_Chat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S2C_Chat msg.
         * @member {string} msg
         * @memberof protos.S2C_Chat
         * @instance
         */
        S2C_Chat.prototype.msg = "";

        /**
         * S2C_Chat channel.
         * @member {number} channel
         * @memberof protos.S2C_Chat
         * @instance
         */
        S2C_Chat.prototype.channel = 0;

        /**
         * S2C_Chat time.
         * @member {number|Long} time
         * @memberof protos.S2C_Chat
         * @instance
         */
        S2C_Chat.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * S2C_Chat from.
         * @member {number|Long} from
         * @memberof protos.S2C_Chat
         * @instance
         */
        S2C_Chat.prototype.from = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new S2C_Chat instance using the specified properties.
         * @function create
         * @memberof protos.S2C_Chat
         * @static
         * @param {protos.IS2C_Chat=} [properties] Properties to set
         * @returns {protos.S2C_Chat} S2C_Chat instance
         */
        S2C_Chat.create = function create(properties) {
            return new S2C_Chat(properties);
        };

        /**
         * Encodes the specified S2C_Chat message. Does not implicitly {@link protos.S2C_Chat.verify|verify} messages.
         * @function encode
         * @memberof protos.S2C_Chat
         * @static
         * @param {protos.IS2C_Chat} message S2C_Chat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_Chat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.msg);
            if (message.channel != null && Object.hasOwnProperty.call(message, "channel"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.channel);
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.time);
            if (message.from != null && Object.hasOwnProperty.call(message, "from"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.from);
            return writer;
        };

        /**
         * Encodes the specified S2C_Chat message, length delimited. Does not implicitly {@link protos.S2C_Chat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.S2C_Chat
         * @static
         * @param {protos.IS2C_Chat} message S2C_Chat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_Chat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S2C_Chat message from the specified reader or buffer.
         * @function decode
         * @memberof protos.S2C_Chat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.S2C_Chat} S2C_Chat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_Chat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.S2C_Chat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.msg = reader.string();
                    break;
                case 2:
                    message.channel = reader.int32();
                    break;
                case 3:
                    message.time = reader.int64();
                    break;
                case 4:
                    message.from = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S2C_Chat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.S2C_Chat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.S2C_Chat} S2C_Chat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_Chat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S2C_Chat message.
         * @function verify
         * @memberof protos.S2C_Chat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S2C_Chat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.channel != null && message.hasOwnProperty("channel"))
                if (!$util.isInteger(message.channel))
                    return "channel: integer expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                    return "time: integer|Long expected";
            if (message.from != null && message.hasOwnProperty("from"))
                if (!$util.isInteger(message.from) && !(message.from && $util.isInteger(message.from.low) && $util.isInteger(message.from.high)))
                    return "from: integer|Long expected";
            return null;
        };

        return S2C_Chat;
    })();

    /**
     * CmdType enum.
     * @name protos.CmdType
     * @enum {number}
     * @property {number} CmdType_None=0 CmdType_None value
     * @property {number} CMD_S2C_Login=10000 CMD_S2C_Login value
     * @property {number} CMD_C2S_Login=10001 CMD_C2S_Login value
     * @property {number} CMD_S2C_CreateRoom=20000 CMD_S2C_CreateRoom value
     * @property {number} CMD_C2S_CreateRoom=20001 CMD_C2S_CreateRoom value
     * @property {number} CMD_S2C_EnterRoom=20002 CMD_S2C_EnterRoom value
     * @property {number} CMD_C2S_EnterRoom=20003 CMD_C2S_EnterRoom value
     * @property {number} CMD_S2C_LeaveRoom=20004 CMD_S2C_LeaveRoom value
     * @property {number} CMD_C2S_LeaveRoom=20005 CMD_C2S_LeaveRoom value
     * @property {number} CMD_S2C_RoomList=20006 CMD_S2C_RoomList value
     * @property {number} CMD_C2S_RoomList=20007 CMD_C2S_RoomList value
     * @property {number} CMD_S2C_Ready=20008 CMD_S2C_Ready value
     * @property {number} CMD_C2S_Ready=20009 CMD_C2S_Ready value
     * @property {number} CMD_S2C_Cow_Start=21000 CMD_S2C_Cow_Start value
     * @property {number} CMD_S2C_Cow_Draw=21001 CMD_S2C_Cow_Draw value
     * @property {number} CMD_S2C_Cow_Compare=21002 CMD_S2C_Cow_Compare value
     * @property {number} CMD_S2C_Cow_Ready=21003 CMD_S2C_Cow_Ready value
     * @property {number} CMD_C2S_Chat=30000 CMD_C2S_Chat value
     * @property {number} CMD_S2C_Chat=30001 CMD_S2C_Chat value
     */
    protos.CmdType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CmdType_None"] = 0;
        values[valuesById[10000] = "CMD_S2C_Login"] = 10000;
        values[valuesById[10001] = "CMD_C2S_Login"] = 10001;
        values[valuesById[20000] = "CMD_S2C_CreateRoom"] = 20000;
        values[valuesById[20001] = "CMD_C2S_CreateRoom"] = 20001;
        values[valuesById[20002] = "CMD_S2C_EnterRoom"] = 20002;
        values[valuesById[20003] = "CMD_C2S_EnterRoom"] = 20003;
        values[valuesById[20004] = "CMD_S2C_LeaveRoom"] = 20004;
        values[valuesById[20005] = "CMD_C2S_LeaveRoom"] = 20005;
        values[valuesById[20006] = "CMD_S2C_RoomList"] = 20006;
        values[valuesById[20007] = "CMD_C2S_RoomList"] = 20007;
        values[valuesById[20008] = "CMD_S2C_Ready"] = 20008;
        values[valuesById[20009] = "CMD_C2S_Ready"] = 20009;
        values[valuesById[21000] = "CMD_S2C_Cow_Start"] = 21000;
        values[valuesById[21001] = "CMD_S2C_Cow_Draw"] = 21001;
        values[valuesById[21002] = "CMD_S2C_Cow_Compare"] = 21002;
        values[valuesById[21003] = "CMD_S2C_Cow_Ready"] = 21003;
        values[valuesById[30000] = "CMD_C2S_Chat"] = 30000;
        values[valuesById[30001] = "CMD_S2C_Chat"] = 30001;
        return values;
    })();

    protos.S2C_Cow_Start = (function() {

        /**
         * Properties of a S2C_Cow_Start.
         * @memberof protos
         * @interface IS2C_Cow_Start
         * @property {number|null} [CountDown] S2C_Cow_Start CountDown
         * @property {number|null} [State] S2C_Cow_Start State
         */

        /**
         * Constructs a new S2C_Cow_Start.
         * @memberof protos
         * @classdesc Represents a S2C_Cow_Start.
         * @implements IS2C_Cow_Start
         * @constructor
         * @param {protos.IS2C_Cow_Start=} [properties] Properties to set
         */
        function S2C_Cow_Start(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S2C_Cow_Start CountDown.
         * @member {number} CountDown
         * @memberof protos.S2C_Cow_Start
         * @instance
         */
        S2C_Cow_Start.prototype.CountDown = 0;

        /**
         * S2C_Cow_Start State.
         * @member {number} State
         * @memberof protos.S2C_Cow_Start
         * @instance
         */
        S2C_Cow_Start.prototype.State = 0;

        /**
         * Creates a new S2C_Cow_Start instance using the specified properties.
         * @function create
         * @memberof protos.S2C_Cow_Start
         * @static
         * @param {protos.IS2C_Cow_Start=} [properties] Properties to set
         * @returns {protos.S2C_Cow_Start} S2C_Cow_Start instance
         */
        S2C_Cow_Start.create = function create(properties) {
            return new S2C_Cow_Start(properties);
        };

        /**
         * Encodes the specified S2C_Cow_Start message. Does not implicitly {@link protos.S2C_Cow_Start.verify|verify} messages.
         * @function encode
         * @memberof protos.S2C_Cow_Start
         * @static
         * @param {protos.IS2C_Cow_Start} message S2C_Cow_Start message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_Cow_Start.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.CountDown != null && Object.hasOwnProperty.call(message, "CountDown"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.CountDown);
            if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.State);
            return writer;
        };

        /**
         * Encodes the specified S2C_Cow_Start message, length delimited. Does not implicitly {@link protos.S2C_Cow_Start.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.S2C_Cow_Start
         * @static
         * @param {protos.IS2C_Cow_Start} message S2C_Cow_Start message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_Cow_Start.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S2C_Cow_Start message from the specified reader or buffer.
         * @function decode
         * @memberof protos.S2C_Cow_Start
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.S2C_Cow_Start} S2C_Cow_Start
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_Cow_Start.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.S2C_Cow_Start();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.CountDown = reader.int32();
                    break;
                case 2:
                    message.State = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S2C_Cow_Start message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.S2C_Cow_Start
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.S2C_Cow_Start} S2C_Cow_Start
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_Cow_Start.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S2C_Cow_Start message.
         * @function verify
         * @memberof protos.S2C_Cow_Start
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S2C_Cow_Start.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.CountDown != null && message.hasOwnProperty("CountDown"))
                if (!$util.isInteger(message.CountDown))
                    return "CountDown: integer expected";
            if (message.State != null && message.hasOwnProperty("State"))
                if (!$util.isInteger(message.State))
                    return "State: integer expected";
            return null;
        };

        return S2C_Cow_Start;
    })();

    protos.S2C_Cow_Draw = (function() {

        /**
         * Properties of a S2C_Cow_Draw.
         * @memberof protos
         * @interface IS2C_Cow_Draw
         * @property {number|null} [CountDown] S2C_Cow_Draw CountDown
         * @property {number|null} [State] S2C_Cow_Draw State
         * @property {Array.<protos.ICards>|null} [Cards] S2C_Cow_Draw Cards
         */

        /**
         * Constructs a new S2C_Cow_Draw.
         * @memberof protos
         * @classdesc Represents a S2C_Cow_Draw.
         * @implements IS2C_Cow_Draw
         * @constructor
         * @param {protos.IS2C_Cow_Draw=} [properties] Properties to set
         */
        function S2C_Cow_Draw(properties) {
            this.Cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S2C_Cow_Draw CountDown.
         * @member {number} CountDown
         * @memberof protos.S2C_Cow_Draw
         * @instance
         */
        S2C_Cow_Draw.prototype.CountDown = 0;

        /**
         * S2C_Cow_Draw State.
         * @member {number} State
         * @memberof protos.S2C_Cow_Draw
         * @instance
         */
        S2C_Cow_Draw.prototype.State = 0;

        /**
         * S2C_Cow_Draw Cards.
         * @member {Array.<protos.ICards>} Cards
         * @memberof protos.S2C_Cow_Draw
         * @instance
         */
        S2C_Cow_Draw.prototype.Cards = $util.emptyArray;

        /**
         * Creates a new S2C_Cow_Draw instance using the specified properties.
         * @function create
         * @memberof protos.S2C_Cow_Draw
         * @static
         * @param {protos.IS2C_Cow_Draw=} [properties] Properties to set
         * @returns {protos.S2C_Cow_Draw} S2C_Cow_Draw instance
         */
        S2C_Cow_Draw.create = function create(properties) {
            return new S2C_Cow_Draw(properties);
        };

        /**
         * Encodes the specified S2C_Cow_Draw message. Does not implicitly {@link protos.S2C_Cow_Draw.verify|verify} messages.
         * @function encode
         * @memberof protos.S2C_Cow_Draw
         * @static
         * @param {protos.IS2C_Cow_Draw} message S2C_Cow_Draw message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_Cow_Draw.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.CountDown != null && Object.hasOwnProperty.call(message, "CountDown"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.CountDown);
            if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.State);
            if (message.Cards != null && message.Cards.length)
                for (var i = 0; i < message.Cards.length; ++i)
                    $root.protos.Cards.encode(message.Cards[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified S2C_Cow_Draw message, length delimited. Does not implicitly {@link protos.S2C_Cow_Draw.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.S2C_Cow_Draw
         * @static
         * @param {protos.IS2C_Cow_Draw} message S2C_Cow_Draw message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_Cow_Draw.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S2C_Cow_Draw message from the specified reader or buffer.
         * @function decode
         * @memberof protos.S2C_Cow_Draw
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.S2C_Cow_Draw} S2C_Cow_Draw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_Cow_Draw.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.S2C_Cow_Draw();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.CountDown = reader.int32();
                    break;
                case 2:
                    message.State = reader.int32();
                    break;
                case 3:
                    if (!(message.Cards && message.Cards.length))
                        message.Cards = [];
                    message.Cards.push($root.protos.Cards.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S2C_Cow_Draw message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.S2C_Cow_Draw
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.S2C_Cow_Draw} S2C_Cow_Draw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_Cow_Draw.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S2C_Cow_Draw message.
         * @function verify
         * @memberof protos.S2C_Cow_Draw
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S2C_Cow_Draw.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.CountDown != null && message.hasOwnProperty("CountDown"))
                if (!$util.isInteger(message.CountDown))
                    return "CountDown: integer expected";
            if (message.State != null && message.hasOwnProperty("State"))
                if (!$util.isInteger(message.State))
                    return "State: integer expected";
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                if (!Array.isArray(message.Cards))
                    return "Cards: array expected";
                for (var i = 0; i < message.Cards.length; ++i) {
                    var error = $root.protos.Cards.verify(message.Cards[i]);
                    if (error)
                        return "Cards." + error;
                }
            }
            return null;
        };

        return S2C_Cow_Draw;
    })();

    protos.Cards = (function() {

        /**
         * Properties of a Cards.
         * @memberof protos
         * @interface ICards
         * @property {Array.<number>|null} [Card] Cards Card
         */

        /**
         * Constructs a new Cards.
         * @memberof protos
         * @classdesc Represents a Cards.
         * @implements ICards
         * @constructor
         * @param {protos.ICards=} [properties] Properties to set
         */
        function Cards(properties) {
            this.Card = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Cards Card.
         * @member {Array.<number>} Card
         * @memberof protos.Cards
         * @instance
         */
        Cards.prototype.Card = $util.emptyArray;

        /**
         * Creates a new Cards instance using the specified properties.
         * @function create
         * @memberof protos.Cards
         * @static
         * @param {protos.ICards=} [properties] Properties to set
         * @returns {protos.Cards} Cards instance
         */
        Cards.create = function create(properties) {
            return new Cards(properties);
        };

        /**
         * Encodes the specified Cards message. Does not implicitly {@link protos.Cards.verify|verify} messages.
         * @function encode
         * @memberof protos.Cards
         * @static
         * @param {protos.ICards} message Cards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cards.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Card != null && message.Card.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.Card.length; ++i)
                    writer.int32(message.Card[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified Cards message, length delimited. Does not implicitly {@link protos.Cards.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.Cards
         * @static
         * @param {protos.ICards} message Cards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cards.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Cards message from the specified reader or buffer.
         * @function decode
         * @memberof protos.Cards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.Cards} Cards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cards.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.Cards();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Card && message.Card.length))
                        message.Card = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.Card.push(reader.int32());
                    } else
                        message.Card.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Cards message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.Cards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.Cards} Cards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cards.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Cards message.
         * @function verify
         * @memberof protos.Cards
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Cards.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Card != null && message.hasOwnProperty("Card")) {
                if (!Array.isArray(message.Card))
                    return "Card: array expected";
                for (var i = 0; i < message.Card.length; ++i)
                    if (!$util.isInteger(message.Card[i]))
                        return "Card: integer[] expected";
            }
            return null;
        };

        return Cards;
    })();

    protos.S2C_Cow_Compare = (function() {

        /**
         * Properties of a S2C_Cow_Compare.
         * @memberof protos
         * @interface IS2C_Cow_Compare
         * @property {number|null} [CountDown] S2C_Cow_Compare CountDown
         * @property {number|null} [State] S2C_Cow_Compare State
         * @property {Array.<string>|null} [CowType] S2C_Cow_Compare CowType
         * @property {Array.<number>|null} [Result] S2C_Cow_Compare Result
         */

        /**
         * Constructs a new S2C_Cow_Compare.
         * @memberof protos
         * @classdesc Represents a S2C_Cow_Compare.
         * @implements IS2C_Cow_Compare
         * @constructor
         * @param {protos.IS2C_Cow_Compare=} [properties] Properties to set
         */
        function S2C_Cow_Compare(properties) {
            this.CowType = [];
            this.Result = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S2C_Cow_Compare CountDown.
         * @member {number} CountDown
         * @memberof protos.S2C_Cow_Compare
         * @instance
         */
        S2C_Cow_Compare.prototype.CountDown = 0;

        /**
         * S2C_Cow_Compare State.
         * @member {number} State
         * @memberof protos.S2C_Cow_Compare
         * @instance
         */
        S2C_Cow_Compare.prototype.State = 0;

        /**
         * S2C_Cow_Compare CowType.
         * @member {Array.<string>} CowType
         * @memberof protos.S2C_Cow_Compare
         * @instance
         */
        S2C_Cow_Compare.prototype.CowType = $util.emptyArray;

        /**
         * S2C_Cow_Compare Result.
         * @member {Array.<number>} Result
         * @memberof protos.S2C_Cow_Compare
         * @instance
         */
        S2C_Cow_Compare.prototype.Result = $util.emptyArray;

        /**
         * Creates a new S2C_Cow_Compare instance using the specified properties.
         * @function create
         * @memberof protos.S2C_Cow_Compare
         * @static
         * @param {protos.IS2C_Cow_Compare=} [properties] Properties to set
         * @returns {protos.S2C_Cow_Compare} S2C_Cow_Compare instance
         */
        S2C_Cow_Compare.create = function create(properties) {
            return new S2C_Cow_Compare(properties);
        };

        /**
         * Encodes the specified S2C_Cow_Compare message. Does not implicitly {@link protos.S2C_Cow_Compare.verify|verify} messages.
         * @function encode
         * @memberof protos.S2C_Cow_Compare
         * @static
         * @param {protos.IS2C_Cow_Compare} message S2C_Cow_Compare message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_Cow_Compare.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.CountDown != null && Object.hasOwnProperty.call(message, "CountDown"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.CountDown);
            if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.State);
            if (message.CowType != null && message.CowType.length)
                for (var i = 0; i < message.CowType.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.CowType[i]);
            if (message.Result != null && message.Result.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (var i = 0; i < message.Result.length; ++i)
                    writer.int32(message.Result[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified S2C_Cow_Compare message, length delimited. Does not implicitly {@link protos.S2C_Cow_Compare.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.S2C_Cow_Compare
         * @static
         * @param {protos.IS2C_Cow_Compare} message S2C_Cow_Compare message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_Cow_Compare.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S2C_Cow_Compare message from the specified reader or buffer.
         * @function decode
         * @memberof protos.S2C_Cow_Compare
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.S2C_Cow_Compare} S2C_Cow_Compare
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_Cow_Compare.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.S2C_Cow_Compare();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.CountDown = reader.int32();
                    break;
                case 2:
                    message.State = reader.int32();
                    break;
                case 3:
                    if (!(message.CowType && message.CowType.length))
                        message.CowType = [];
                    message.CowType.push(reader.string());
                    break;
                case 4:
                    if (!(message.Result && message.Result.length))
                        message.Result = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.Result.push(reader.int32());
                    } else
                        message.Result.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S2C_Cow_Compare message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.S2C_Cow_Compare
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.S2C_Cow_Compare} S2C_Cow_Compare
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_Cow_Compare.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S2C_Cow_Compare message.
         * @function verify
         * @memberof protos.S2C_Cow_Compare
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S2C_Cow_Compare.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.CountDown != null && message.hasOwnProperty("CountDown"))
                if (!$util.isInteger(message.CountDown))
                    return "CountDown: integer expected";
            if (message.State != null && message.hasOwnProperty("State"))
                if (!$util.isInteger(message.State))
                    return "State: integer expected";
            if (message.CowType != null && message.hasOwnProperty("CowType")) {
                if (!Array.isArray(message.CowType))
                    return "CowType: array expected";
                for (var i = 0; i < message.CowType.length; ++i)
                    if (!$util.isString(message.CowType[i]))
                        return "CowType: string[] expected";
            }
            if (message.Result != null && message.hasOwnProperty("Result")) {
                if (!Array.isArray(message.Result))
                    return "Result: array expected";
                for (var i = 0; i < message.Result.length; ++i)
                    if (!$util.isInteger(message.Result[i]))
                        return "Result: integer[] expected";
            }
            return null;
        };

        return S2C_Cow_Compare;
    })();

    protos.S2C_Cow_Ready = (function() {

        /**
         * Properties of a S2C_Cow_Ready.
         * @memberof protos
         * @interface IS2C_Cow_Ready
         * @property {number|null} [State] S2C_Cow_Ready State
         */

        /**
         * Constructs a new S2C_Cow_Ready.
         * @memberof protos
         * @classdesc Represents a S2C_Cow_Ready.
         * @implements IS2C_Cow_Ready
         * @constructor
         * @param {protos.IS2C_Cow_Ready=} [properties] Properties to set
         */
        function S2C_Cow_Ready(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S2C_Cow_Ready State.
         * @member {number} State
         * @memberof protos.S2C_Cow_Ready
         * @instance
         */
        S2C_Cow_Ready.prototype.State = 0;

        /**
         * Creates a new S2C_Cow_Ready instance using the specified properties.
         * @function create
         * @memberof protos.S2C_Cow_Ready
         * @static
         * @param {protos.IS2C_Cow_Ready=} [properties] Properties to set
         * @returns {protos.S2C_Cow_Ready} S2C_Cow_Ready instance
         */
        S2C_Cow_Ready.create = function create(properties) {
            return new S2C_Cow_Ready(properties);
        };

        /**
         * Encodes the specified S2C_Cow_Ready message. Does not implicitly {@link protos.S2C_Cow_Ready.verify|verify} messages.
         * @function encode
         * @memberof protos.S2C_Cow_Ready
         * @static
         * @param {protos.IS2C_Cow_Ready} message S2C_Cow_Ready message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_Cow_Ready.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.State);
            return writer;
        };

        /**
         * Encodes the specified S2C_Cow_Ready message, length delimited. Does not implicitly {@link protos.S2C_Cow_Ready.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.S2C_Cow_Ready
         * @static
         * @param {protos.IS2C_Cow_Ready} message S2C_Cow_Ready message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_Cow_Ready.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S2C_Cow_Ready message from the specified reader or buffer.
         * @function decode
         * @memberof protos.S2C_Cow_Ready
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.S2C_Cow_Ready} S2C_Cow_Ready
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_Cow_Ready.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.S2C_Cow_Ready();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.State = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S2C_Cow_Ready message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.S2C_Cow_Ready
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.S2C_Cow_Ready} S2C_Cow_Ready
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_Cow_Ready.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S2C_Cow_Ready message.
         * @function verify
         * @memberof protos.S2C_Cow_Ready
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S2C_Cow_Ready.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.State != null && message.hasOwnProperty("State"))
                if (!$util.isInteger(message.State))
                    return "State: integer expected";
            return null;
        };

        return S2C_Cow_Ready;
    })();

    protos.C2S_Login = (function() {

        /**
         * Properties of a C2S_Login.
         * @memberof protos
         * @interface IC2S_Login
         * @property {string|null} [username] C2S_Login username
         * @property {string|null} [password] C2S_Login password
         */

        /**
         * Constructs a new C2S_Login.
         * @memberof protos
         * @classdesc Represents a C2S_Login.
         * @implements IC2S_Login
         * @constructor
         * @param {protos.IC2S_Login=} [properties] Properties to set
         */
        function C2S_Login(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2S_Login username.
         * @member {string} username
         * @memberof protos.C2S_Login
         * @instance
         */
        C2S_Login.prototype.username = "";

        /**
         * C2S_Login password.
         * @member {string} password
         * @memberof protos.C2S_Login
         * @instance
         */
        C2S_Login.prototype.password = "";

        /**
         * Creates a new C2S_Login instance using the specified properties.
         * @function create
         * @memberof protos.C2S_Login
         * @static
         * @param {protos.IC2S_Login=} [properties] Properties to set
         * @returns {protos.C2S_Login} C2S_Login instance
         */
        C2S_Login.create = function create(properties) {
            return new C2S_Login(properties);
        };

        /**
         * Encodes the specified C2S_Login message. Does not implicitly {@link protos.C2S_Login.verify|verify} messages.
         * @function encode
         * @memberof protos.C2S_Login
         * @static
         * @param {protos.IC2S_Login} message C2S_Login message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2S_Login.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            return writer;
        };

        /**
         * Encodes the specified C2S_Login message, length delimited. Does not implicitly {@link protos.C2S_Login.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.C2S_Login
         * @static
         * @param {protos.IC2S_Login} message C2S_Login message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2S_Login.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2S_Login message from the specified reader or buffer.
         * @function decode
         * @memberof protos.C2S_Login
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.C2S_Login} C2S_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2S_Login.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.C2S_Login();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.username = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C2S_Login message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.C2S_Login
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.C2S_Login} C2S_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2S_Login.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2S_Login message.
         * @function verify
         * @memberof protos.C2S_Login
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2S_Login.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            return null;
        };

        return C2S_Login;
    })();

    protos.S2C_Login = (function() {

        /**
         * Properties of a S2C_Login.
         * @memberof protos
         * @interface IS2C_Login
         * @property {number|null} [code] S2C_Login code
         * @property {string|null} [msg] S2C_Login msg
         */

        /**
         * Constructs a new S2C_Login.
         * @memberof protos
         * @classdesc Represents a S2C_Login.
         * @implements IS2C_Login
         * @constructor
         * @param {protos.IS2C_Login=} [properties] Properties to set
         */
        function S2C_Login(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S2C_Login code.
         * @member {number} code
         * @memberof protos.S2C_Login
         * @instance
         */
        S2C_Login.prototype.code = 0;

        /**
         * S2C_Login msg.
         * @member {string} msg
         * @memberof protos.S2C_Login
         * @instance
         */
        S2C_Login.prototype.msg = "";

        /**
         * Creates a new S2C_Login instance using the specified properties.
         * @function create
         * @memberof protos.S2C_Login
         * @static
         * @param {protos.IS2C_Login=} [properties] Properties to set
         * @returns {protos.S2C_Login} S2C_Login instance
         */
        S2C_Login.create = function create(properties) {
            return new S2C_Login(properties);
        };

        /**
         * Encodes the specified S2C_Login message. Does not implicitly {@link protos.S2C_Login.verify|verify} messages.
         * @function encode
         * @memberof protos.S2C_Login
         * @static
         * @param {protos.IS2C_Login} message S2C_Login message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_Login.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified S2C_Login message, length delimited. Does not implicitly {@link protos.S2C_Login.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.S2C_Login
         * @static
         * @param {protos.IS2C_Login} message S2C_Login message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_Login.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S2C_Login message from the specified reader or buffer.
         * @function decode
         * @memberof protos.S2C_Login
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.S2C_Login} S2C_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_Login.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.S2C_Login();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.msg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S2C_Login message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.S2C_Login
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.S2C_Login} S2C_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_Login.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S2C_Login message.
         * @function verify
         * @memberof protos.S2C_Login
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S2C_Login.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        return S2C_Login;
    })();

    protos.C2S_RoomList = (function() {

        /**
         * Properties of a C2S_RoomList.
         * @memberof protos
         * @interface IC2S_RoomList
         * @property {string|null} [RoomType] C2S_RoomList RoomType
         */

        /**
         * Constructs a new C2S_RoomList.
         * @memberof protos
         * @classdesc Represents a C2S_RoomList.
         * @implements IC2S_RoomList
         * @constructor
         * @param {protos.IC2S_RoomList=} [properties] Properties to set
         */
        function C2S_RoomList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2S_RoomList RoomType.
         * @member {string} RoomType
         * @memberof protos.C2S_RoomList
         * @instance
         */
        C2S_RoomList.prototype.RoomType = "";

        /**
         * Creates a new C2S_RoomList instance using the specified properties.
         * @function create
         * @memberof protos.C2S_RoomList
         * @static
         * @param {protos.IC2S_RoomList=} [properties] Properties to set
         * @returns {protos.C2S_RoomList} C2S_RoomList instance
         */
        C2S_RoomList.create = function create(properties) {
            return new C2S_RoomList(properties);
        };

        /**
         * Encodes the specified C2S_RoomList message. Does not implicitly {@link protos.C2S_RoomList.verify|verify} messages.
         * @function encode
         * @memberof protos.C2S_RoomList
         * @static
         * @param {protos.IC2S_RoomList} message C2S_RoomList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2S_RoomList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RoomType != null && Object.hasOwnProperty.call(message, "RoomType"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.RoomType);
            return writer;
        };

        /**
         * Encodes the specified C2S_RoomList message, length delimited. Does not implicitly {@link protos.C2S_RoomList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.C2S_RoomList
         * @static
         * @param {protos.IC2S_RoomList} message C2S_RoomList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2S_RoomList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2S_RoomList message from the specified reader or buffer.
         * @function decode
         * @memberof protos.C2S_RoomList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.C2S_RoomList} C2S_RoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2S_RoomList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.C2S_RoomList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.RoomType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C2S_RoomList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.C2S_RoomList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.C2S_RoomList} C2S_RoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2S_RoomList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2S_RoomList message.
         * @function verify
         * @memberof protos.C2S_RoomList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2S_RoomList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RoomType != null && message.hasOwnProperty("RoomType"))
                if (!$util.isString(message.RoomType))
                    return "RoomType: string expected";
            return null;
        };

        return C2S_RoomList;
    })();

    protos.S2C_RoomList = (function() {

        /**
         * Properties of a S2C_RoomList.
         * @memberof protos
         * @interface IS2C_RoomList
         * @property {Array.<protos.IRoomInfo>|null} [RoomList] S2C_RoomList RoomList
         */

        /**
         * Constructs a new S2C_RoomList.
         * @memberof protos
         * @classdesc Represents a S2C_RoomList.
         * @implements IS2C_RoomList
         * @constructor
         * @param {protos.IS2C_RoomList=} [properties] Properties to set
         */
        function S2C_RoomList(properties) {
            this.RoomList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S2C_RoomList RoomList.
         * @member {Array.<protos.IRoomInfo>} RoomList
         * @memberof protos.S2C_RoomList
         * @instance
         */
        S2C_RoomList.prototype.RoomList = $util.emptyArray;

        /**
         * Creates a new S2C_RoomList instance using the specified properties.
         * @function create
         * @memberof protos.S2C_RoomList
         * @static
         * @param {protos.IS2C_RoomList=} [properties] Properties to set
         * @returns {protos.S2C_RoomList} S2C_RoomList instance
         */
        S2C_RoomList.create = function create(properties) {
            return new S2C_RoomList(properties);
        };

        /**
         * Encodes the specified S2C_RoomList message. Does not implicitly {@link protos.S2C_RoomList.verify|verify} messages.
         * @function encode
         * @memberof protos.S2C_RoomList
         * @static
         * @param {protos.IS2C_RoomList} message S2C_RoomList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_RoomList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RoomList != null && message.RoomList.length)
                for (var i = 0; i < message.RoomList.length; ++i)
                    $root.protos.RoomInfo.encode(message.RoomList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified S2C_RoomList message, length delimited. Does not implicitly {@link protos.S2C_RoomList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.S2C_RoomList
         * @static
         * @param {protos.IS2C_RoomList} message S2C_RoomList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_RoomList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S2C_RoomList message from the specified reader or buffer.
         * @function decode
         * @memberof protos.S2C_RoomList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.S2C_RoomList} S2C_RoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_RoomList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.S2C_RoomList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.RoomList && message.RoomList.length))
                        message.RoomList = [];
                    message.RoomList.push($root.protos.RoomInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S2C_RoomList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.S2C_RoomList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.S2C_RoomList} S2C_RoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_RoomList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S2C_RoomList message.
         * @function verify
         * @memberof protos.S2C_RoomList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S2C_RoomList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RoomList != null && message.hasOwnProperty("RoomList")) {
                if (!Array.isArray(message.RoomList))
                    return "RoomList: array expected";
                for (var i = 0; i < message.RoomList.length; ++i) {
                    var error = $root.protos.RoomInfo.verify(message.RoomList[i]);
                    if (error)
                        return "RoomList." + error;
                }
            }
            return null;
        };

        return S2C_RoomList;
    })();

    protos.RoomInfo = (function() {

        /**
         * Properties of a RoomInfo.
         * @memberof protos
         * @interface IRoomInfo
         * @property {number|null} [RoomId] RoomInfo RoomId
         * @property {number|null} [RoomPlayerNum] RoomInfo RoomPlayerNum
         * @property {number|null} [RoomStatus] RoomInfo RoomStatus
         */

        /**
         * Constructs a new RoomInfo.
         * @memberof protos
         * @classdesc Represents a RoomInfo.
         * @implements IRoomInfo
         * @constructor
         * @param {protos.IRoomInfo=} [properties] Properties to set
         */
        function RoomInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomInfo RoomId.
         * @member {number} RoomId
         * @memberof protos.RoomInfo
         * @instance
         */
        RoomInfo.prototype.RoomId = 0;

        /**
         * RoomInfo RoomPlayerNum.
         * @member {number} RoomPlayerNum
         * @memberof protos.RoomInfo
         * @instance
         */
        RoomInfo.prototype.RoomPlayerNum = 0;

        /**
         * RoomInfo RoomStatus.
         * @member {number} RoomStatus
         * @memberof protos.RoomInfo
         * @instance
         */
        RoomInfo.prototype.RoomStatus = 0;

        /**
         * Creates a new RoomInfo instance using the specified properties.
         * @function create
         * @memberof protos.RoomInfo
         * @static
         * @param {protos.IRoomInfo=} [properties] Properties to set
         * @returns {protos.RoomInfo} RoomInfo instance
         */
        RoomInfo.create = function create(properties) {
            return new RoomInfo(properties);
        };

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link protos.RoomInfo.verify|verify} messages.
         * @function encode
         * @memberof protos.RoomInfo
         * @static
         * @param {protos.IRoomInfo} message RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RoomId != null && Object.hasOwnProperty.call(message, "RoomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.RoomId);
            if (message.RoomPlayerNum != null && Object.hasOwnProperty.call(message, "RoomPlayerNum"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.RoomPlayerNum);
            if (message.RoomStatus != null && Object.hasOwnProperty.call(message, "RoomStatus"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.RoomStatus);
            return writer;
        };

        /**
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link protos.RoomInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.RoomInfo
         * @static
         * @param {protos.IRoomInfo} message RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @function decode
         * @memberof protos.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.RoomInfo} RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.RoomInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.RoomId = reader.int32();
                    break;
                case 2:
                    message.RoomPlayerNum = reader.int32();
                    break;
                case 3:
                    message.RoomStatus = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.RoomInfo} RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomInfo message.
         * @function verify
         * @memberof protos.RoomInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RoomId != null && message.hasOwnProperty("RoomId"))
                if (!$util.isInteger(message.RoomId))
                    return "RoomId: integer expected";
            if (message.RoomPlayerNum != null && message.hasOwnProperty("RoomPlayerNum"))
                if (!$util.isInteger(message.RoomPlayerNum))
                    return "RoomPlayerNum: integer expected";
            if (message.RoomStatus != null && message.hasOwnProperty("RoomStatus"))
                if (!$util.isInteger(message.RoomStatus))
                    return "RoomStatus: integer expected";
            return null;
        };

        return RoomInfo;
    })();

    protos.C2S_CreateRoom = (function() {

        /**
         * Properties of a C2S_CreateRoom.
         * @memberof protos
         * @interface IC2S_CreateRoom
         * @property {string|null} [RoomType] C2S_CreateRoom RoomType
         * @property {string|null} [RoomName] C2S_CreateRoom RoomName
         */

        /**
         * Constructs a new C2S_CreateRoom.
         * @memberof protos
         * @classdesc Represents a C2S_CreateRoom.
         * @implements IC2S_CreateRoom
         * @constructor
         * @param {protos.IC2S_CreateRoom=} [properties] Properties to set
         */
        function C2S_CreateRoom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2S_CreateRoom RoomType.
         * @member {string} RoomType
         * @memberof protos.C2S_CreateRoom
         * @instance
         */
        C2S_CreateRoom.prototype.RoomType = "";

        /**
         * C2S_CreateRoom RoomName.
         * @member {string} RoomName
         * @memberof protos.C2S_CreateRoom
         * @instance
         */
        C2S_CreateRoom.prototype.RoomName = "";

        /**
         * Creates a new C2S_CreateRoom instance using the specified properties.
         * @function create
         * @memberof protos.C2S_CreateRoom
         * @static
         * @param {protos.IC2S_CreateRoom=} [properties] Properties to set
         * @returns {protos.C2S_CreateRoom} C2S_CreateRoom instance
         */
        C2S_CreateRoom.create = function create(properties) {
            return new C2S_CreateRoom(properties);
        };

        /**
         * Encodes the specified C2S_CreateRoom message. Does not implicitly {@link protos.C2S_CreateRoom.verify|verify} messages.
         * @function encode
         * @memberof protos.C2S_CreateRoom
         * @static
         * @param {protos.IC2S_CreateRoom} message C2S_CreateRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2S_CreateRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RoomType != null && Object.hasOwnProperty.call(message, "RoomType"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.RoomType);
            if (message.RoomName != null && Object.hasOwnProperty.call(message, "RoomName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.RoomName);
            return writer;
        };

        /**
         * Encodes the specified C2S_CreateRoom message, length delimited. Does not implicitly {@link protos.C2S_CreateRoom.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.C2S_CreateRoom
         * @static
         * @param {protos.IC2S_CreateRoom} message C2S_CreateRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2S_CreateRoom.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2S_CreateRoom message from the specified reader or buffer.
         * @function decode
         * @memberof protos.C2S_CreateRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.C2S_CreateRoom} C2S_CreateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2S_CreateRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.C2S_CreateRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.RoomType = reader.string();
                    break;
                case 2:
                    message.RoomName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C2S_CreateRoom message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.C2S_CreateRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.C2S_CreateRoom} C2S_CreateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2S_CreateRoom.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2S_CreateRoom message.
         * @function verify
         * @memberof protos.C2S_CreateRoom
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2S_CreateRoom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RoomType != null && message.hasOwnProperty("RoomType"))
                if (!$util.isString(message.RoomType))
                    return "RoomType: string expected";
            if (message.RoomName != null && message.hasOwnProperty("RoomName"))
                if (!$util.isString(message.RoomName))
                    return "RoomName: string expected";
            return null;
        };

        return C2S_CreateRoom;
    })();

    protos.S2C_CreateRoom = (function() {

        /**
         * Properties of a S2C_CreateRoom.
         * @memberof protos
         * @interface IS2C_CreateRoom
         * @property {number|null} [code] S2C_CreateRoom code
         */

        /**
         * Constructs a new S2C_CreateRoom.
         * @memberof protos
         * @classdesc Represents a S2C_CreateRoom.
         * @implements IS2C_CreateRoom
         * @constructor
         * @param {protos.IS2C_CreateRoom=} [properties] Properties to set
         */
        function S2C_CreateRoom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S2C_CreateRoom code.
         * @member {number} code
         * @memberof protos.S2C_CreateRoom
         * @instance
         */
        S2C_CreateRoom.prototype.code = 0;

        /**
         * Creates a new S2C_CreateRoom instance using the specified properties.
         * @function create
         * @memberof protos.S2C_CreateRoom
         * @static
         * @param {protos.IS2C_CreateRoom=} [properties] Properties to set
         * @returns {protos.S2C_CreateRoom} S2C_CreateRoom instance
         */
        S2C_CreateRoom.create = function create(properties) {
            return new S2C_CreateRoom(properties);
        };

        /**
         * Encodes the specified S2C_CreateRoom message. Does not implicitly {@link protos.S2C_CreateRoom.verify|verify} messages.
         * @function encode
         * @memberof protos.S2C_CreateRoom
         * @static
         * @param {protos.IS2C_CreateRoom} message S2C_CreateRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_CreateRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            return writer;
        };

        /**
         * Encodes the specified S2C_CreateRoom message, length delimited. Does not implicitly {@link protos.S2C_CreateRoom.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.S2C_CreateRoom
         * @static
         * @param {protos.IS2C_CreateRoom} message S2C_CreateRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_CreateRoom.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S2C_CreateRoom message from the specified reader or buffer.
         * @function decode
         * @memberof protos.S2C_CreateRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.S2C_CreateRoom} S2C_CreateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_CreateRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.S2C_CreateRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S2C_CreateRoom message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.S2C_CreateRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.S2C_CreateRoom} S2C_CreateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_CreateRoom.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S2C_CreateRoom message.
         * @function verify
         * @memberof protos.S2C_CreateRoom
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S2C_CreateRoom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            return null;
        };

        return S2C_CreateRoom;
    })();

    protos.C2S_EnterRoom = (function() {

        /**
         * Properties of a C2S_EnterRoom.
         * @memberof protos
         * @interface IC2S_EnterRoom
         * @property {number|null} [RoomId] C2S_EnterRoom RoomId
         * @property {string|null} [RoomType] C2S_EnterRoom RoomType
         */

        /**
         * Constructs a new C2S_EnterRoom.
         * @memberof protos
         * @classdesc Represents a C2S_EnterRoom.
         * @implements IC2S_EnterRoom
         * @constructor
         * @param {protos.IC2S_EnterRoom=} [properties] Properties to set
         */
        function C2S_EnterRoom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2S_EnterRoom RoomId.
         * @member {number} RoomId
         * @memberof protos.C2S_EnterRoom
         * @instance
         */
        C2S_EnterRoom.prototype.RoomId = 0;

        /**
         * C2S_EnterRoom RoomType.
         * @member {string} RoomType
         * @memberof protos.C2S_EnterRoom
         * @instance
         */
        C2S_EnterRoom.prototype.RoomType = "";

        /**
         * Creates a new C2S_EnterRoom instance using the specified properties.
         * @function create
         * @memberof protos.C2S_EnterRoom
         * @static
         * @param {protos.IC2S_EnterRoom=} [properties] Properties to set
         * @returns {protos.C2S_EnterRoom} C2S_EnterRoom instance
         */
        C2S_EnterRoom.create = function create(properties) {
            return new C2S_EnterRoom(properties);
        };

        /**
         * Encodes the specified C2S_EnterRoom message. Does not implicitly {@link protos.C2S_EnterRoom.verify|verify} messages.
         * @function encode
         * @memberof protos.C2S_EnterRoom
         * @static
         * @param {protos.IC2S_EnterRoom} message C2S_EnterRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2S_EnterRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RoomId != null && Object.hasOwnProperty.call(message, "RoomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.RoomId);
            if (message.RoomType != null && Object.hasOwnProperty.call(message, "RoomType"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.RoomType);
            return writer;
        };

        /**
         * Encodes the specified C2S_EnterRoom message, length delimited. Does not implicitly {@link protos.C2S_EnterRoom.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.C2S_EnterRoom
         * @static
         * @param {protos.IC2S_EnterRoom} message C2S_EnterRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2S_EnterRoom.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2S_EnterRoom message from the specified reader or buffer.
         * @function decode
         * @memberof protos.C2S_EnterRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.C2S_EnterRoom} C2S_EnterRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2S_EnterRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.C2S_EnterRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.RoomId = reader.int32();
                    break;
                case 2:
                    message.RoomType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C2S_EnterRoom message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.C2S_EnterRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.C2S_EnterRoom} C2S_EnterRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2S_EnterRoom.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2S_EnterRoom message.
         * @function verify
         * @memberof protos.C2S_EnterRoom
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2S_EnterRoom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RoomId != null && message.hasOwnProperty("RoomId"))
                if (!$util.isInteger(message.RoomId))
                    return "RoomId: integer expected";
            if (message.RoomType != null && message.hasOwnProperty("RoomType"))
                if (!$util.isString(message.RoomType))
                    return "RoomType: string expected";
            return null;
        };

        return C2S_EnterRoom;
    })();

    protos.S2C_EnterRoom = (function() {

        /**
         * Properties of a S2C_EnterRoom.
         * @memberof protos
         * @interface IS2C_EnterRoom
         * @property {number|null} [code] S2C_EnterRoom code
         * @property {number|Long|null} [playerId] S2C_EnterRoom playerId
         */

        /**
         * Constructs a new S2C_EnterRoom.
         * @memberof protos
         * @classdesc Represents a S2C_EnterRoom.
         * @implements IS2C_EnterRoom
         * @constructor
         * @param {protos.IS2C_EnterRoom=} [properties] Properties to set
         */
        function S2C_EnterRoom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S2C_EnterRoom code.
         * @member {number} code
         * @memberof protos.S2C_EnterRoom
         * @instance
         */
        S2C_EnterRoom.prototype.code = 0;

        /**
         * S2C_EnterRoom playerId.
         * @member {number|Long} playerId
         * @memberof protos.S2C_EnterRoom
         * @instance
         */
        S2C_EnterRoom.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new S2C_EnterRoom instance using the specified properties.
         * @function create
         * @memberof protos.S2C_EnterRoom
         * @static
         * @param {protos.IS2C_EnterRoom=} [properties] Properties to set
         * @returns {protos.S2C_EnterRoom} S2C_EnterRoom instance
         */
        S2C_EnterRoom.create = function create(properties) {
            return new S2C_EnterRoom(properties);
        };

        /**
         * Encodes the specified S2C_EnterRoom message. Does not implicitly {@link protos.S2C_EnterRoom.verify|verify} messages.
         * @function encode
         * @memberof protos.S2C_EnterRoom
         * @static
         * @param {protos.IS2C_EnterRoom} message S2C_EnterRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_EnterRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.playerId);
            return writer;
        };

        /**
         * Encodes the specified S2C_EnterRoom message, length delimited. Does not implicitly {@link protos.S2C_EnterRoom.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.S2C_EnterRoom
         * @static
         * @param {protos.IS2C_EnterRoom} message S2C_EnterRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_EnterRoom.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S2C_EnterRoom message from the specified reader or buffer.
         * @function decode
         * @memberof protos.S2C_EnterRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.S2C_EnterRoom} S2C_EnterRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_EnterRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.S2C_EnterRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.playerId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S2C_EnterRoom message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.S2C_EnterRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.S2C_EnterRoom} S2C_EnterRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_EnterRoom.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S2C_EnterRoom message.
         * @function verify
         * @memberof protos.S2C_EnterRoom
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S2C_EnterRoom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                    return "playerId: integer|Long expected";
            return null;
        };

        return S2C_EnterRoom;
    })();

    protos.C2S_LeaveRoom = (function() {

        /**
         * Properties of a C2S_LeaveRoom.
         * @memberof protos
         * @interface IC2S_LeaveRoom
         * @property {number|null} [RoomId] C2S_LeaveRoom RoomId
         * @property {string|null} [RoomType] C2S_LeaveRoom RoomType
         */

        /**
         * Constructs a new C2S_LeaveRoom.
         * @memberof protos
         * @classdesc Represents a C2S_LeaveRoom.
         * @implements IC2S_LeaveRoom
         * @constructor
         * @param {protos.IC2S_LeaveRoom=} [properties] Properties to set
         */
        function C2S_LeaveRoom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2S_LeaveRoom RoomId.
         * @member {number} RoomId
         * @memberof protos.C2S_LeaveRoom
         * @instance
         */
        C2S_LeaveRoom.prototype.RoomId = 0;

        /**
         * C2S_LeaveRoom RoomType.
         * @member {string} RoomType
         * @memberof protos.C2S_LeaveRoom
         * @instance
         */
        C2S_LeaveRoom.prototype.RoomType = "";

        /**
         * Creates a new C2S_LeaveRoom instance using the specified properties.
         * @function create
         * @memberof protos.C2S_LeaveRoom
         * @static
         * @param {protos.IC2S_LeaveRoom=} [properties] Properties to set
         * @returns {protos.C2S_LeaveRoom} C2S_LeaveRoom instance
         */
        C2S_LeaveRoom.create = function create(properties) {
            return new C2S_LeaveRoom(properties);
        };

        /**
         * Encodes the specified C2S_LeaveRoom message. Does not implicitly {@link protos.C2S_LeaveRoom.verify|verify} messages.
         * @function encode
         * @memberof protos.C2S_LeaveRoom
         * @static
         * @param {protos.IC2S_LeaveRoom} message C2S_LeaveRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2S_LeaveRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RoomId != null && Object.hasOwnProperty.call(message, "RoomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.RoomId);
            if (message.RoomType != null && Object.hasOwnProperty.call(message, "RoomType"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.RoomType);
            return writer;
        };

        /**
         * Encodes the specified C2S_LeaveRoom message, length delimited. Does not implicitly {@link protos.C2S_LeaveRoom.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.C2S_LeaveRoom
         * @static
         * @param {protos.IC2S_LeaveRoom} message C2S_LeaveRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2S_LeaveRoom.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2S_LeaveRoom message from the specified reader or buffer.
         * @function decode
         * @memberof protos.C2S_LeaveRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.C2S_LeaveRoom} C2S_LeaveRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2S_LeaveRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.C2S_LeaveRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.RoomId = reader.int32();
                    break;
                case 2:
                    message.RoomType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C2S_LeaveRoom message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.C2S_LeaveRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.C2S_LeaveRoom} C2S_LeaveRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2S_LeaveRoom.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2S_LeaveRoom message.
         * @function verify
         * @memberof protos.C2S_LeaveRoom
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2S_LeaveRoom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RoomId != null && message.hasOwnProperty("RoomId"))
                if (!$util.isInteger(message.RoomId))
                    return "RoomId: integer expected";
            if (message.RoomType != null && message.hasOwnProperty("RoomType"))
                if (!$util.isString(message.RoomType))
                    return "RoomType: string expected";
            return null;
        };

        return C2S_LeaveRoom;
    })();

    protos.S2C_LeaveRoom = (function() {

        /**
         * Properties of a S2C_LeaveRoom.
         * @memberof protos
         * @interface IS2C_LeaveRoom
         * @property {number|null} [code] S2C_LeaveRoom code
         * @property {number|Long|null} [playerId] S2C_LeaveRoom playerId
         */

        /**
         * Constructs a new S2C_LeaveRoom.
         * @memberof protos
         * @classdesc Represents a S2C_LeaveRoom.
         * @implements IS2C_LeaveRoom
         * @constructor
         * @param {protos.IS2C_LeaveRoom=} [properties] Properties to set
         */
        function S2C_LeaveRoom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S2C_LeaveRoom code.
         * @member {number} code
         * @memberof protos.S2C_LeaveRoom
         * @instance
         */
        S2C_LeaveRoom.prototype.code = 0;

        /**
         * S2C_LeaveRoom playerId.
         * @member {number|Long} playerId
         * @memberof protos.S2C_LeaveRoom
         * @instance
         */
        S2C_LeaveRoom.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new S2C_LeaveRoom instance using the specified properties.
         * @function create
         * @memberof protos.S2C_LeaveRoom
         * @static
         * @param {protos.IS2C_LeaveRoom=} [properties] Properties to set
         * @returns {protos.S2C_LeaveRoom} S2C_LeaveRoom instance
         */
        S2C_LeaveRoom.create = function create(properties) {
            return new S2C_LeaveRoom(properties);
        };

        /**
         * Encodes the specified S2C_LeaveRoom message. Does not implicitly {@link protos.S2C_LeaveRoom.verify|verify} messages.
         * @function encode
         * @memberof protos.S2C_LeaveRoom
         * @static
         * @param {protos.IS2C_LeaveRoom} message S2C_LeaveRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_LeaveRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.playerId);
            return writer;
        };

        /**
         * Encodes the specified S2C_LeaveRoom message, length delimited. Does not implicitly {@link protos.S2C_LeaveRoom.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.S2C_LeaveRoom
         * @static
         * @param {protos.IS2C_LeaveRoom} message S2C_LeaveRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_LeaveRoom.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S2C_LeaveRoom message from the specified reader or buffer.
         * @function decode
         * @memberof protos.S2C_LeaveRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.S2C_LeaveRoom} S2C_LeaveRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_LeaveRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.S2C_LeaveRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.playerId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S2C_LeaveRoom message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.S2C_LeaveRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.S2C_LeaveRoom} S2C_LeaveRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_LeaveRoom.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S2C_LeaveRoom message.
         * @function verify
         * @memberof protos.S2C_LeaveRoom
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S2C_LeaveRoom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                    return "playerId: integer|Long expected";
            return null;
        };

        return S2C_LeaveRoom;
    })();

    protos.C2S_Ready = (function() {

        /**
         * Properties of a C2S_Ready.
         * @memberof protos
         * @interface IC2S_Ready
         * @property {number|null} [roomId] C2S_Ready roomId
         * @property {string|null} [roomType] C2S_Ready roomType
         * @property {number|null} [Ready] C2S_Ready Ready
         */

        /**
         * Constructs a new C2S_Ready.
         * @memberof protos
         * @classdesc Represents a C2S_Ready.
         * @implements IC2S_Ready
         * @constructor
         * @param {protos.IC2S_Ready=} [properties] Properties to set
         */
        function C2S_Ready(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2S_Ready roomId.
         * @member {number} roomId
         * @memberof protos.C2S_Ready
         * @instance
         */
        C2S_Ready.prototype.roomId = 0;

        /**
         * C2S_Ready roomType.
         * @member {string} roomType
         * @memberof protos.C2S_Ready
         * @instance
         */
        C2S_Ready.prototype.roomType = "";

        /**
         * C2S_Ready Ready.
         * @member {number} Ready
         * @memberof protos.C2S_Ready
         * @instance
         */
        C2S_Ready.prototype.Ready = 0;

        /**
         * Creates a new C2S_Ready instance using the specified properties.
         * @function create
         * @memberof protos.C2S_Ready
         * @static
         * @param {protos.IC2S_Ready=} [properties] Properties to set
         * @returns {protos.C2S_Ready} C2S_Ready instance
         */
        C2S_Ready.create = function create(properties) {
            return new C2S_Ready(properties);
        };

        /**
         * Encodes the specified C2S_Ready message. Does not implicitly {@link protos.C2S_Ready.verify|verify} messages.
         * @function encode
         * @memberof protos.C2S_Ready
         * @static
         * @param {protos.IC2S_Ready} message C2S_Ready message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2S_Ready.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomId);
            if (message.roomType != null && Object.hasOwnProperty.call(message, "roomType"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomType);
            if (message.Ready != null && Object.hasOwnProperty.call(message, "Ready"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Ready);
            return writer;
        };

        /**
         * Encodes the specified C2S_Ready message, length delimited. Does not implicitly {@link protos.C2S_Ready.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.C2S_Ready
         * @static
         * @param {protos.IC2S_Ready} message C2S_Ready message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2S_Ready.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2S_Ready message from the specified reader or buffer.
         * @function decode
         * @memberof protos.C2S_Ready
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.C2S_Ready} C2S_Ready
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2S_Ready.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.C2S_Ready();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomId = reader.int32();
                    break;
                case 2:
                    message.roomType = reader.string();
                    break;
                case 3:
                    message.Ready = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C2S_Ready message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.C2S_Ready
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.C2S_Ready} C2S_Ready
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2S_Ready.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2S_Ready message.
         * @function verify
         * @memberof protos.C2S_Ready
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2S_Ready.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId))
                    return "roomId: integer expected";
            if (message.roomType != null && message.hasOwnProperty("roomType"))
                if (!$util.isString(message.roomType))
                    return "roomType: string expected";
            if (message.Ready != null && message.hasOwnProperty("Ready"))
                if (!$util.isInteger(message.Ready))
                    return "Ready: integer expected";
            return null;
        };

        return C2S_Ready;
    })();

    protos.S2C_Ready = (function() {

        /**
         * Properties of a S2C_Ready.
         * @memberof protos
         * @interface IS2C_Ready
         * @property {number|null} [code] S2C_Ready code
         * @property {number|Long|null} [playerId] S2C_Ready playerId
         */

        /**
         * Constructs a new S2C_Ready.
         * @memberof protos
         * @classdesc Represents a S2C_Ready.
         * @implements IS2C_Ready
         * @constructor
         * @param {protos.IS2C_Ready=} [properties] Properties to set
         */
        function S2C_Ready(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S2C_Ready code.
         * @member {number} code
         * @memberof protos.S2C_Ready
         * @instance
         */
        S2C_Ready.prototype.code = 0;

        /**
         * S2C_Ready playerId.
         * @member {number|Long} playerId
         * @memberof protos.S2C_Ready
         * @instance
         */
        S2C_Ready.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new S2C_Ready instance using the specified properties.
         * @function create
         * @memberof protos.S2C_Ready
         * @static
         * @param {protos.IS2C_Ready=} [properties] Properties to set
         * @returns {protos.S2C_Ready} S2C_Ready instance
         */
        S2C_Ready.create = function create(properties) {
            return new S2C_Ready(properties);
        };

        /**
         * Encodes the specified S2C_Ready message. Does not implicitly {@link protos.S2C_Ready.verify|verify} messages.
         * @function encode
         * @memberof protos.S2C_Ready
         * @static
         * @param {protos.IS2C_Ready} message S2C_Ready message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_Ready.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.playerId);
            return writer;
        };

        /**
         * Encodes the specified S2C_Ready message, length delimited. Does not implicitly {@link protos.S2C_Ready.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.S2C_Ready
         * @static
         * @param {protos.IS2C_Ready} message S2C_Ready message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_Ready.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S2C_Ready message from the specified reader or buffer.
         * @function decode
         * @memberof protos.S2C_Ready
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.S2C_Ready} S2C_Ready
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_Ready.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.S2C_Ready();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.playerId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S2C_Ready message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.S2C_Ready
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.S2C_Ready} S2C_Ready
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_Ready.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S2C_Ready message.
         * @function verify
         * @memberof protos.S2C_Ready
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S2C_Ready.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                    return "playerId: integer|Long expected";
            return null;
        };

        return S2C_Ready;
    })();

    return protos;
})();